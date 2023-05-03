package honeybee.spring4mvc.semiprojectv4.model;

public class Member {
    private String mbno;
    private String name;
    private String jumin1;
    private String jumin2;
    private String userid;
    private String passwd;
    private String zipcode;
    private String addr1;
    private String addr2;
    private String email;
    private String phone;
    private String regdate;

    private String userid1;
    private String passwd1;

    public Member () {};

    public Member(String mbno, String name, String jumin1, String jumin2, String userid, String passwd, String zipcode, String addr1, String addr2, String email, String phone, String regdate) {
        this.mbno = mbno;
        this.name = name;
        this.jumin1 = jumin1;
        this.jumin2 = jumin2;
        this.userid = userid;
        this.passwd = passwd;
        this.zipcode = zipcode;
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.email = email;
        this.phone = phone;
        this.regdate = regdate;
    }

    public Member (String userid1,String passwd1){
        this.userid1 = userid1;
        this.passwd1 = passwd1;
    }

    public String getUserid1() {
        return userid1;
    }

    public void setUserid1(String userid1) {
        this.userid1 = userid1;
    }

    public String getPasswd1() {
        return passwd1;
    }

    public void setPasswd1(String passwd1) {
        this.passwd1 = passwd1;
    }

    public String getMbno() {
        return mbno;
    }

    public void setMbno(String mbno) {
        this.mbno = mbno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJumin1() {
        return jumin1;
    }

    public void setJumin1(String jumin1) {
        this.jumin1 = jumin1;
    }

    public String getJumin2() {
        return jumin2;
    }

    public void setJumin2(String jumin2) {
        this.jumin2 = jumin2;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getAddr1() {
        return addr1;
    }

    public void setAddr1(String addr1) {
        this.addr1 = addr1;
    }

    public String getAddr2() {
        return addr2;
    }

    public void setAddr2(String addr2) {
        this.addr2 = addr2;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRegdate() {
        return regdate;
    }

    public void setRegdate(String regdate) {
        this.regdate = regdate;
    }

}
