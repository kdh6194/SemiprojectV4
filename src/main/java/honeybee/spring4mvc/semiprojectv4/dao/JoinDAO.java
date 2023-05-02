package honeybee.spring4mvc.semiprojectv4.dao;

import honeybee.spring4mvc.semiprojectv4.model.Member;
import honeybee.spring4mvc.semiprojectv4.model.Zipcode;

import java.util.List;

public interface JoinDAO {
    List<Zipcode> selectZipcode(String dong);

    int insertMember(Member m);

    int selectOneUserid(String uid);

    int selectOneMember(Member m);
}
