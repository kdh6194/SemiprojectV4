const logo = document.querySelector("#logo");
logo.addEventListener('click', ()=>{
    location.href="/";
});

// 이용약관 체크박스 이벤트
const agree1 = document.querySelector("#agree1");

// 이용약관 체크박스 이벤트
const agree2 = document.querySelector("#agree2");

//개인정보 수집 동의
const okagree = document.querySelector("#okagree");
okagree?.addEventListener('click', ()=>{
    if (!agree1.checked) {alert("이용약관에 동의를 체크하세요")}
    else if (!agree2.checked) {alert("개인정보 수집에 동의를 체크하세요")}
    else {location.href="/join/checkme";}
})

//개인정보 수집 미동의
const noagree = document.querySelector("#noagree");
noagree?.addEventListener('click', ()=>{
    location.href="/";
});

//---------------------------------------------------

// 실명확인
const name2 = document.querySelector("#name2")
const jumin1 = document.querySelector("#jumin1")
const jumin2 = document.querySelector("#jumin2")
const chkjumin = document.querySelector("#chkjumin")
const chkbtn2 = document.querySelector("#check2btn")
const checkfrm2 = document.querySelector("#checkfrm2")
chkbtn2?.addEventListener('click',()=>{
    if(name2.value == ''){alert("이름을 입력하세요")}
    else if(jumin1.value == ''){alert("생년월일을 입력하세요")}
    else if(jumin2.value == ''){alert("주민번호 뒷자리를 입력하세요")}
    else if(!chkjumin.checked){alert("동의에 체크해주세요")}
    else {
        checkfrm2.method = 'post';
        checkfrm2.action = "/join/joinme";
        checkfrm2.submit();
    }

})

// -------------------------------------------------------

const userid = document.querySelector("#userid")
const passwd = document.querySelector("#passwd")
const repasswd = document.querySelector("#repasswd")
const zip1 = document.querySelector("#zip1")
const zip2 = document.querySelector("#zip2")
const addr1 = document.querySelector("#addr1")
const addr2 = document.querySelector("#addr2")
const email1 = document.querySelector("#email1")
const email2 = document.querySelector("#email2")
const tel1 = document.querySelector("#tel1")
const tel2 = document.querySelector("#tel2")
const tel3 = document.querySelector("#tel3")
const recaptcha = document.querySelector("#g-recaptcha")
const sendzip = document.querySelector("#sendzip")
const addrlist = document.querySelector("#addrlist")
const joinbtn = document.querySelector("#joinbtn")
const zipfrm = document.querySelector("#zipfrm")
const joinfrm = document.querySelector("#joinfrm")

joinbtn?.addEventListener('click',()=>{
    if(userid.value == ''){alert("아이디를 입력하세요")}
    else if(passwd.value == ''){alert("비밀번호를 입력하세요")}
    else if(repasswd.value == ''){alert("입력했던 비밀번호를 입력하세요")}
    else if(passwd.value != repasswd.value){alert("일치하지 않습니다. 비밀번호를 확인하세요")}
    else if(zip1.value == '' || zip2.value == '' ){alert("우편 번호를 입력하세요")}
    else if(addr1.value == '' || addr2.value == ''){alert("주소를 입력하세요")}
    else if(email1.value == '' || email2.value == ''){alert("이메일을 입력하세요")}
    else if(tel2.value == '' || tel3.value == ''){alert("전화번호를 입력하세요")}
    else if(recaptcha.value == ''){alert("자동가입 방지를 입력하세요")}
    else {
        joinfrm.method = 'post';
        joinfrm.action = "/join/joinok";
        joinfrm.submit();
    }
})

sendzip?.addEventListener('click',()=>{
    if(!addrlist) {
        alert("해당 주소를 선택하세요")
    }else{
        zipfrm.method = 'post'
        zipfrm.action = '/join/joinme'
        zipfrm.submit();
    }
})