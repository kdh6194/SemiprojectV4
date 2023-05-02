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
    if(checkfrm2.name.value === ''){alert("이름을 입력하세요")}
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

const jnfrm = document.forms.joinfrm;
const zipbtn = document.querySelector("#findzipbtn")
const dong = document.querySelector("#dong")
const addrlist = document.querySelector("#addrlist")
const joinbtn = document.querySelector("#joinbtn")
const sendzip = document.querySelector("#sendzip")
const zipmodal = document.querySelector("#zipmodal")
const email3 = document.querySelector("#email3")
const zpmdbtn = document.querySelector("#zpmdbtn")

joinbtn?.addEventListener('click',()=>{
    if(jnfrm.userid.value === ''){alert("아이디를 입력하세요")}
    else if(jnfrm.passwd.value === ''){alert("비밀번호를 입력하세요")}
    else if(jnfrm.repasswd.value === ''){alert("입력했던 비밀번호를 입력하세요")}
    else if(jnfrm.passwd.value !== jnfrm.repasswd.value){alert("일치하지 않습니다. 비밀번호를 확인하세요")}
    else if(jnfrm.zip1.value === '' || jnfrm.zip2.value === '' ){alert("우편 번호를 입력하세요")}
    else if(jnfrm.addr1.value === '' || jnfrm.addr2.value === ''){alert("주소를 입력하세요")}
    else if(jnfrm.email1.value === '' || jnfrm.email2.value === ''){alert("이메일을 입력하세요")}
    else if(jnfrm.tel2.value === '' || jnfrm.tel3.value === ''){alert("전화번호를 입력하세요")}
    else if(jnfrm.recaptcha.value === ''){alert("자동가입 방지를 입력하세요")}
    else {
        jnfrm.method = 'post';
        jnfrm.action = "/join/joinok";
        jnfrm.submit();
    }
})


const showzipaddr = (jsons) => {
    // for(idx in jsons) {
    //     console.log(jsons[idx]);
    // }

    jsons = JSON.parse(jsons);
    let addrs = '';
    jsons.forEach(function (data,idx) {
        addrs += `<option>${data['zipcode']} ${data['sido']}
            ${data['gugun']} ${data['dong']} ${data['ri']} ${data['bunji']}</option>`;
    }) // 여기서 띄어쓰기가 안되어있어서 zip2에 몰아서 출력되는 것이었다.
    while (addrlist.lastChild){
        addrlist.removeChild(addrlist.lastChild);
    }
    addrlist.innerHTML = addrs;
}

zipbtn?.addEventListener('click',()=>{
    if(dong.value === ''){ alert('검색할 동이름을 입력하세요'); return;}
    const url = '/join/zipcode?dong=' + dong.value;
    fetch(url).then(response => response.text()).then(text=>showzipaddr(text));
})

sendzip?.addEventListener('click', () => {
    let addr = addrlist.value;
    if (addr !== '') {
        // 123-456 서울 구로구 구로1동
        let ziplist = addr.split(' ')[0];
        let ziplist1 = `${addr.split(' ')[1]} ${addr.split(' ')[2]} ${addr.split(' ')[3]} ${addr.split(' ')[4]} ${addr.split(' ')[5]}`;

        jnfrm.zip1.value = ziplist.split('-')[0];
        jnfrm.zip2.value = ziplist.split('-')[1];
        jnfrm.addr1.value = ziplist1;

        modal.hide();

    }
    else {
        alert("주소를 선택하세요");
    }
})

const modal = new bootstrap.Modal(zipmodal,{});
zpmdbtn?.addEventListener('click',()=>{
    while (addrlist.lastChild){
        addrlist.removeChild(addrlist.lastChild);
    }
    dong.value = '';
    modal.show();
})

email3?.addEventListener('change',(e)=>{
    jnfrm.email2.value = e.target.value
    if(email3.value === ""){
        jnfrm.email2.removeAttribute('readonly');
    }
})