package honeybee.spring4mvc.semiprojectv4.dao;

import honeybee.spring4mvc.semiprojectv4.model.Board;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository("bdao")
public class BoardDAOImpl implements BoardDAO {
    @Autowired private SqlSession sqlSession;
    @Override
    public List<Board> selectBoard(int stbno)
    {
        return sqlSession.selectList("board.selectsql",stbno) ;
    }
    @Override
    public List<Board> selectBoard(Map<String,Object> params)
    {
        return sqlSession.selectList("board.selectsql",params) ;
    }
    @Override
    public int countBoard() {
        return sqlSession.selectOne("board.countBoard");
    }
    @Override
    public int countBoard(Map<String,Object> params) {
        return sqlSession.selectOne("board.countBoard",params);
    }
}
