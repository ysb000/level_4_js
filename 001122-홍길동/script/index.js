// //웹디자인개발기능사
// //자바스크립트ver
// const popup = document.querySelector('#popup');
// const notice = document.querySelectorAll('.notice li');
// const popupClose = document.querySelector('#popup .close');

// const subMenu = document.querySelectorAll('nav > ul > li > ul');
// const subLi = document.querySelectorAll('nav > ul > li > ul li');
// const nav = document.querySelectorAll('nav > ul >li'); 

// //팝업 숨기기 초기값
// popup.style.display ='none';

// //서브 모두 숨기기 초기값
// for(let s of subMenu){
//     //위 아래로 부드럽게 사라지도록 하는 방법 //opacity:0; 제자리에서 사라짐
//     s.style.height= '0';
//     s.style.overflow ='hidden'
//     s.style.transition = 'height 0.6s'
// }

// //서브메뉴 오버/아웃시 하이라이트
// for(let sl of subLi){
//     sl.addEventListener('mouseover',()=>{sl.children[0].style.backgroundColor='pink';})  
//     sl.addEventListener('mouseout',()=>{sl.children[0].style.background='none';})  
// }

// //메인 메뉴 반복문
// for(let n of nav){
//     n.addEventListener('mouseover',()=>{
//         n.style.backgroundColor = 'yellow';
//         n.children[1].style.height = '160px'
//     })
//     n.addEventListener('mouseout', ()=>{
//         n.children[1].style.height = '0'
//         n.style.background = 'none';
//     })
// }

// //공지사항 첫 글 클릭 시 팝업 출력, 팝업 닫기 클릭 시 팝업 숨기기
// notice[0].addEventListener('click',()=>{
//     popup.style.display = 'block';
//     popup.style.zIndex = '999';
// })

// popupClose.addEventListener('click',()=>{
//     popup.style.display= 'none';
// })

// //공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const  tabTitle = document.querySelectorAll('.notice_gallery .title a');
// const  tabContent = document.querySelectorAll('.notice_gallery .contents > *');

// tabTitle.forEach((t, i)=>{
//     t.addEventListener('click',()=>{
//         for(let reset of tabTitle) reset.classList.remove('active');
//         t.classList.add('active');

//         for(let reset of tabContent) reset.style.display = 'none';
//         tabContent[i].style.display = 'flex';
//     })
// })

// //히어로 배너 상<->하 슬라이드 구조(swiper X)
// const heroWrap = document.querySelector('.hero_wrapper');
// const heroSlide =document.querySelectorAll('.hero_slide'); //모든 슬라이드 갯수세기용 //최댓값을 알기위해서 변수 생성
// // heroWrap.style.transform = 'translateY(-300px)';//test

// let count = 0; //초기값 0으로 시작해서 heroSlide의 개수만큼 증가
// heroWrap.style.transition = 'transform 0.6s';

// const slideTimer = setInterval(()=>{
//     count++; //3초마다 1증가
//     // if(count > 2){count = 0;}
//     if(count > heroSlide.length-1){count = 0}
//     // console.log(count*300); 
//     heroWrap.style.transform = `translateY(-${count*300}px)`;

// }, 3000)


//제이쿼리ver
console.log(typeof $); //function 제이쿼리 로드 확인(필수 X)

//자바스크립트에서는 HTML 작업 시 변수 저장 작업 필수
//제이쿼리는 변수 구조가 워낙 짧아 2~3번 이상 자주 반복하는 변수만 지정하고 그 외는 일회성으로 사용가능
//다른 라이브러리와 호환되지 않는 경우가 있어 제이쿼리를 사용하지 못하는 경우가 있음
//제이쿼리는 자바스크립트의 라이브러리 //자바스크립트를 알고 있어야 제이쿼리를 활용할 수 있음
//제이쿼리 사용 시 화살표 함수 사용 권장안함. 일반함수 위주로 사용
//제이쿼리는 html과 관련하여 만들어진 줄임말이기때문에 html과 상관없이 돌아가는 것들은 자바스크립트로 해결해야한다.

//팝업 숨기기
$('#popup').hide();

//서브 모두 숨기기
//제이쿼리는 대상이 2개 이상이어도 for 없이 한번에 다수 처리가 가능하다.
const $sub = $('nav > ul > li > ul');
const $nav = $('nav > ul > li');
// $sub.hide(); //hide는 display:none; 내장되어 있어 문제조건에 맞지 않음

//자바스크립트에서 css 사용법 : 객체.style.속성 = '값'
//제이쿼리 css 사용법 : 객체.css('속성','값');
// $sub.css('height','0')
//     .css('overflow','hidden') //css() 2개 이상 연결 = 체이닝 기법
//     .css('transition','height 0.4s');

$sub.slideUp(); //접고 //slideup/slideDown 사용 시 짝으로 사용해야함

//메인 메뉴 하이라이트
$nav.on('mouseover', function(){
    // $(this) 현재 마우스 오버한 대상
    $(this).css('background-color','aqua');
    $(this).children('ul').stop().slideDown(); //nav 자식 ul을 펼치기  
    //애니메이션 중첩으로 인해 마우스가 없는데도 나오는 것을 방지하기 위해 stop() 작성
})
$nav.on('mouseout', function(){
    // $(this) 현재 마우스 오버한 대상
    $(this).css('background','none');
    $(this).children('ul').stop().slideUp();
})

//팝업
$('.notice li:nth-child(1)').on('click', function(){
    $('#popup').show().css('z-index','999');
})
$('#popup .close').on('click', function(){
    $('#popup').hide();
})

//탭 제목 활성화
$('.notice_gallery .title a').on('click', function(){
    $('.notice_gallery .title a').removeClass('active');
    $(this).addClass('active');

    let $i = $(this).index(); //현재 클릭한 대상 인덱스 변수저장
    $('.notice_gallery .contents > *').hide();
    $('.notice_gallery .contents > *').eq($i).css('display', 'flex'); 
    //eq 몇번째 인덱스에 해당하는 요소인지 세는 제이쿼리 함수
})

//제이쿼리ver 슬라이드
let count = 0; //초기값 0으로 시작해서 heroSlide의 개수만큼 증가


const slideTimer = setInterval(function(){
    count++; //3초마다 1증가
    if(count > 2){count = 0;}
    // $('.hero_wrapper').css('transform',`translateY(-${count*300}px)`); //transiton 별도 필요
    // $('.hero_wrapper').css('transform','translateY(-'+(count*300)+'px)');
    
    //기존 js css에서 주로 다루는 transition + transform 애니메이션 묶음 전용 제이쿼리 함수
    $('.hero_wrapper').animate({
        top:-(count*300)+'px',
    }, 400);
}, 3000)