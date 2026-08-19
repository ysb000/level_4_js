//1. 데스크탑 내비 복제 -> 모바일 내비 위치에 붙여넣기
const d_nav = document.querySelector('.full_nav .menu');
const m_nav = document.querySelector('#m_nav');
console.log(d_nav, m_nav);

const cloneNav = d_nav.cloneNode(true);
m_nav.appendChild(cloneNav);

//2. 모바일 메뉴(햄버거) 클릭 시 모바일 배경 + 모바일 메뉴 출력하기
const m_nav_btn = document.querySelector('#m_nav_btn'); //클릭대상
const m_nav_bg = document.querySelector('.m_nav_bg'); //나오는 대상 중 가장 바깥쪽 부모

//안보인다 0 컴퓨터가 이해하는 언어로 초기값 설정
let menu_visible = 0; //안보이는 초기값(상태변수) 설정

m_nav_btn.addEventListener('click',()=>{
    // 기존 css에서 어떤 속성으로 숨겨져있었는지에 따라 반대되는 값 작성하기
    // 기존 display:none -> 변경 display:block or flex
    // 기존 opacity:0 -> 변경 opacity:1

    /* m_nav_bg.style.right = '0%';
    m_nav_bg.style.opacity = '1'; */

    //클릭 이벤트의 동작이 1개다 == (위) 명령어로 끝
    //클릭 이벤트의 동작이 2개 이상이다 == (조건에 따른 함수 실행으로 코드 업그레이드 필요)
    //보인다 안보인다는 뜻은 조건으로 불가능 -> 컴퓨터가 이해하는 언어 0,1로 사용

    menu_visible = !menu_visible; //클릭 이벤트가 실행될때마다 상태변수값 반점
    console.log(menu_visible);
    //메뉴의 보이는 상태(menu_visible)이 0(안보이는 값)이면 어떻게 할 것인가
    menu_visible == 0 ? (()=>{
        //안보인다(참) -> right:0, opacity:1
        m_nav_bg.style.right = '0%';
        m_nav_bg.style.opacity = '1';
    })() : (()=>{
        //보인다(거짓) -> right:-100%, opacity:0
        m_nav_bg.style.right = '-100%';
        m_nav_bg.style.opacity = '0';
    })(); 
});

