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
const checkfrm2 = document.forms.checkfrm2;
const chkbtn2 = document.querySelector("#check2btn")
chkbtn2?.addEventListener('click',()=>{
    if(checkfrm2.name2.value === ''){alert("이름을 입력하세요")}
    else if(checkfrm2.jumin1.value === ''){alert("생년월일을 입력하세요")}
    else if(checkfrm2.jumin2.value === ''){alert("주민번호 뒷자리를 입력하세요")}
    else if(!checkfrm2.chkjumin.checked){alert("동의에 체크해주세요")}
    else {
        checkfrm2.method = 'post';
        checkfrm2.action = "/join/joinme";
        checkfrm2.submit();
    }

})

// -------------------------------------------------------

const joinfrm = document.forms.joinfrm;
const zipfrm = document.forms.zipfrm;
const sendzip = document.querySelector("#sendzip")
const joinbtn = document.querySelector("#joinbtn")

joinbtn?.addEventListener('click',()=>{
    if(joinfrm.userid.value === ''){alert("아이디를 입력하세요")}
    else if(joinfrm.passwd.value === ''){alert("비밀번호를 입력하세요")}
    else if(joinfrm.repasswd.value === ''){alert("입력했던 비밀번호를 입력하세요")}
    else if(joinfrm.passwd.value !== joinfrm.repasswd.value){alert("일치하지 않습니다. 비밀번호를 확인하세요")}
    //else if(joinfrm.zip1.value === '' || joinfrm.zip2.value === '' ){alert("우편 번호를 입력하세요")}
    //else if(joinfrm.addr1.value === '' || joinfrm.addr2.value === ''){alert("주소를 입력하세요")}
    //else if(joinfrm.email1.value === '' || joinfrm.email2.value === ''){alert("이메일을 입력하세요")}
    else if(joinfrm.tel2.value === '' || joinfrm.tel3.value === ''){alert("전화번호를 입력하세요")}
    else if(joinfrm.recaptcha.value === ''){alert("자동가입 방지를 입력하세요")}
    else {
        joinfrm.method = 'post';
        joinfrm.action = "/join/joinok";
        joinfrm.submit();
    }
})

checkfrm2.email3?.addEventListener('change',(e)=>{
    checkfrm2.email2.value = e.target.value;
})



sendzip?.addEventListener('click',()=>{
    if(!zipfrm.addrlist) {
        alert("해당 주소를 선택하세요")
    }else{
        zipfrm.method = 'post'
        zipfrm.action = '/join/joinme'
        zipfrm.submit();
    }
})