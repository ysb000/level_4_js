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
const userId = document.querySelector('#user-id');
const userPw = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');

const nonUserId = document.querySelector('#non-user-id');
const nonUserOrder = document.querySelector('#non-user-order');
const nonUserPw = document.querySelector('#non-user-pw');
const nonMemberLoginBtn = document.querySelector('#non-member-login');

console.log(userId, userPw, nonUserId, nonUserPw, memberLoginBtn, nonMemberLoginBtn);

memberLoginBtn.addEventListener('click', ()=>{
    // if(userId.value == ''){alert('아이디를 입력하세요.')}
    alertFunc(userId, '아이디');
    alertFunc(userPw, '비밀번호')
})
nonMemberLoginBtn.addEventListener('click', ()=>{
    // if(userId.value == ''){alert('아이디를 입력하세요.')}
    alertFunc(nonUserId, '주문자명');
    alertFunc(nonUserOrder, '주문번호')
    alertFunc(nonUserPw, '비회원 주문 비밀번호')
})
function alertFunc(dom, str){
    if(dom.value == ''){alert(`${str}를(을) 입력하세요.`);}
}