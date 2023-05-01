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