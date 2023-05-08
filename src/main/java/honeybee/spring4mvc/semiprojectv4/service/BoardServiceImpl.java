package honeybee.spring4mvc.semiprojectv4.service;

import honeybee.spring4mvc.semiprojectv4.dao.BoardDAO;
import honeybee.spring4mvc.semiprojectv4.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service("bsrv")
public class BoardServiceImpl implements BoardService {
    @Autowired private BoardDAO bdao;
    @Override
    public List<Board> showBoard(int cpage) {
        int stbno = (cpage - 1)*25;
        return bdao.selectBoard(stbno);
    }
    @Override
    public List<Board> showBoard(int cpage, String ftype, String fkey) {
        int stbno = (cpage - 1)*25;

        // 처리시 사용할 데이터들을 해쉬맵에 담아서 보냄
        Map<String, Object> params = new HashMap<>();
        params.put("stbno",stbno);
        params.put("ftype",ftype);
        params.put("fkey",fkey);

        return bdao.selectBoard(params);
    }

    @Override
    public int countBoard() {
        return bdao.countBoard();
    }
    @Override
    public int countBoard(String ftype, String fkey) {
        Map<String, Object> params = new HashMap<>();
        params.put("ftype",ftype);
        params.put("fkey",fkey);
        return bdao.countBoard(params);
    }

    @Override
    public boolean newBoard(Board b) {
        bdao.insertBoard(b);
        return true;
    }
}
