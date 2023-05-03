package honeybee.spring4mvc.semiprojectv4.dao;

import honeybee.spring4mvc.semiprojectv4.model.Member;

import javax.servlet.http.HttpSession;

public interface MemberDAO {

    int selectLogin(Member m);
}
