let logo = document.querySelector("#logo");
logo.addEventListener('click', ()=>{
    location.href="/";
});

// 이용약관 체크박스 이벤트
let agree1 = document.querySelector("#agree1");

// 이용약관 체크박스 이벤트
let agree2 = document.querySelector("#agree2");

//개인정보 수집 동의
let okagree = document.querySelector("#okagree");
okagree?.addEventListener('click', ()=>{
    if (!agree1.checked) {alert("이용약관에 동의를 체크하세요")}
    else if (!agree2.checked) {alert("개인정보 수집에 동의를 체크하세요")}
    else {location.href="/join/checkme";}
})

//개인정보 수집 미동의
let noagree = document.querySelector("#noagree");
noagree.addEventListener('click', ()=>{
    location.href="/";
});