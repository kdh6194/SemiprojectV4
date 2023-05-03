import honeybee.spring4mvc.semiprojectv4.model.Member;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:root-context.xml"})
public class JoinDAOTest {
    @Autowired
    SqlSession sqlSession;

    @Test
    public void findZipcode() {
        String dong = "%구로%";
        assertNotNull(sqlSession.selectList("join.findZipcode", dong));
        System.out.println(sqlSession.selectList("join.findZipcode", dong));
    }

    @Test
    public void checkUserid() {
        String uid = "abc123a"; // 존재하지 않은 아이디 검사
        assertEquals(0,(int)sqlSession.selectOne("join.selectOneUid", uid));
        uid = "abc123";         // 존재하는 아이디 검사
        assertEquals(1,(int)sqlSession.selectOne("join.selectOneUid", uid));
    }

    @Test
    public void newMember() {
        Member m = new Member();
        m.setName("abc");
        m.setJumin1("123456");
        m.setJumin2("1234567");
        m.setUserid("abc123");
        m.setPasswd("abc123");
        m.setZipcode("abc123");
        m.setAddr1("abc123");
        m.setAddr2("abc123");
        m.setEmail("abc123");
        m.setPhone("abc123");
        assertEquals(1,(int)sqlSession.insert("join.insertMember", m));
    }
}
