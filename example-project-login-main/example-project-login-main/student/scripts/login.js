// 목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화) 내용 초반 숨기기
//2. 각 탭 제목 클릭 시
//2-1. 기존 회원 클릭 -> 기존회원 내용 보이기/비회원 내용 숨기기
//2-2. 비회원 클릭 -> 기존회원 내용 숨기기/비회원 내용 보이기

const loginTabTitle = document.querySelectorAll('#login-frm .title button');
const loginTabContent = document.querySelectorAll('#login-frm .contents >ul');

console.log(loginTabTitle, loginTabContent);
loginTabContent[1].classList.add('display-hide'); //초기 숨기기

//비회원 주문 조회 클릭 시(초기모습과 반대되는 상황 먼저 테스트)
loginTabTitle[1].addEventListener('click', ()=>{loginTabFunc(1);})
loginTabTitle[0].addEventListener('click', ()=>{loginTabFunc(0);})

//반복 함수 별도 생성(함수 안에 달라지는 건 매개변수로 미리 지정)
function loginTabFunc(index) {
    //0(숨기기), 1(보이기) ==x
    //0, 1 (모두 숨기기), 1보이기 ==O
    loginTabContent[0].classList.add('display-hide');//모두 숨기기
    loginTabContent[1].classList.add('display-hide'); //모두 숨기기
    loginTabContent[index].classList.remove('display-hide');//클릭한 대상만 활성화
    loginTabTitle[0].classList.remove('active');//모두 숨기기
    loginTabTitle[1].classList.remove('active');//모두 숨기기
    return loginTabTitle[index].classList.add('active');//클릭한 대상만 활성화
    // return;
}

//목표2) 기존회원 - 아이디를 입력하지 않고 기존회원 로그인 버튼 클릭 시 '아이디를 입력하세요' 경고창 출력
//기존회원 - 아이디, 비밀번호, 로그인버튼 변수
const userId = document.querySelector('#user-id');
const userPw = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');
const pwVisibleBtn = document.querySelector('#non-member-pw-visible');

//비회원- 주문자명, 주문번호, 비회용 주문 비밀번호, 주문조회 버튼 변수
const nonUserId = document.querySelector('#non-user-id');
const nonUserOrder = document.querySelector('#non-user-order');
const nonUserPw = document.querySelector('#non-user-pw');
const nonMemberLoginBtn = document.querySelector('#non-member-login');
const nonPwVisibleBtn = document.querySelector('#non-member-pw-visible2')

console.log(userId, userPw, nonUserId, nonUserPw, pwVisibleBtn, memberLoginBtn, nonMemberLoginBtn);

/* memberLoginBtn.addEventListener('click', ()=>{
    // if(userId.value == ''){alert('아이디를 입력하세요.')}
    alertFunc(userId, '아이디');
    alertFunc(userPw, '비밀번호')
})
nonMemberLoginBtn.addEventListener('click', ()=>{
    // if(userId.value == ''){alert('아이디를 입력하세요.')}
    alertFunc(nonUserId, '주문자명');
    alertFunc(nonUserOrder, '주문번호')
    alertFunc(nonUserPw, '비회원 주문 비밀번호')
}) */
function alertFunc(dom, str){
    if(dom.value == ''){alert(`${str}를(을) 입력하세요.`);}
}

//기존회원) 논리연산자 활용한 아이디&비밀번호 동시 검사 수행 이벤트 + 함수
memberLoginBtn.addEventListener('click', ()=>{
    //목표1) 아이디,비밀번호 중 하나라도 적지않으면 'OOO을 입력하세요'
    // if(userId.value == '' && userPw.value == ''){}
    if(userId.value == '' || userPw.value == ''){
        //아이디 비번이 모두 빈 칸인지 
        if(userId.value == '' && userPw.value == ''){
            alert('아이디와 비밀번호를 입력하세요')
        }else if(userId.value == ''){ //else if : 하나의 조건세트에서 두번쨰 조건식이 필요할때(두개 이상 작성가능)
        //아이디가 참인지 비밀번호가 참인지를 체크하기 위해 if 사용
            alert('아이디를 입력하세요');
        }else{// else: 조건세트 안에 거짓을 처리할 때(마지막 한번만 작성 가능) 
            alert('비밀번호를 입력하세요');
        }
    }

    /* //목표2) 아이디, 비밀번호를 모두 적으면 'OOO님 환영합니다'
    if(userId.value != '' && userPw.value != ''){
        alert(`${userId.value}님 환영합니다.`);
    } */
   //삼항조건 ? 참 : 거짓;
    userId.value != '' && userPw.value != '' ? 
    alert(`${userId.value}님 환영합니다.`) : undefined; //거짓으로 실행할 내용이 없다면 undefined or null 
})

//비회원 이벤트-함수
//목표1) 주문자명, 주문번호, 비회원용주문비번을 모두 썼을때 "ooo님 주문은 배송중입니다."
nonMemberLoginBtn.addEventListener('click',()=>{
    /* if(nonUserId.value != '' && nonUserOrder.value != '' && nonUserPw.value != ''){
        alert(`${nonUserId.value}님의 주문은 배송중입니다.`);
    } */
    //삼항조건 ? 참 : 거짓;
    nonUserId.value != '' && nonUserOrder.value != '' && nonUserPw.value != '' ? 
    alert(`${nonUserId.value}님의 주문은 배송중입니다.`) : undefined;

    //목표2) 주문자명, 주문번호, 비회원용주문비번 중 하나라도 안썼을때 상황
    if(nonUserId.value == '' || nonUserOrder.value == '' || nonUserPw.value == ''){
        if(nonUserId.value == '' && nonUserOrder.value == '' && nonUserPw.value == ''){
            alert('주문자명, 주문번호,비회원 주문 비밀번호를 입력하세요')
        }else if(nonUserId.value == ''){
            alert('주문자명을 입력하세요')
        }else if(nonUserOrder.value == ''){ 
            alert('주문번호를 입력하세요')
        }else{ 
            alert('비회원 주문 비밀번호를 입력하세요')
        }
    }
})

// 기존회원) 눈 아이콘 클릭 시 비밀번호 보이기/다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; //비번 숨김상태 초기값
pwVisibleBtn.addEventListener('click', ()=>{
    pwVisibleStatus == 0 ? 
        userPw.type = 'text'
        : userPw.type = 'password';
    pwVisibleStatus = !pwVisibleStatus;
})

// 비회원 주문 비밀번호 숨기기
let nonPwVisibleStatus = 0;
nonPwVisibleBtn.addEventListener('click', ()=>{
    nonPwVisibleStatus == 0 ? 
        nonUserPw.type = 'text'
        : nonUserPw.type = 'password';
        nonPwVisibleStatus = !nonPwVisibleStatus;
})