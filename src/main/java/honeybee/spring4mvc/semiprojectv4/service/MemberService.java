package honeybee.spring4mvc.semiprojectv4.service;

import honeybee.spring4mvc.semiprojectv4.model.Member;

import javax.servlet.http.HttpSession;

public interface MemberService {

    boolean checklogin(Member m, HttpSession sess);
}
