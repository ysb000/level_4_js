//window 객체를 활용한 scroll 이벤트 //모바일도 적용됨

const nav = document.querySelector('nav');
const topCTA = document.querySelector('#top');
const header = document.querySelector('header');
const aside = document.querySelectorAll('aside a');
const section =document.querySelectorAll('section');

//스크롤 이동 시 인식하는 이벤트(멈춰있을때는 인식하지 않음)
window.addEventListener('scroll',()=>{
    //스크롤 위치에 따라 section이 화면 중앙보다 더 위로 올라오면 각 section(4)의 제목 aside(4) 색상 active로 활성화 
    for(let s of section){
        // console.log(s); //for~of가 순회하는 대상 테스트 
        
        const sTop =s.getBoundingClientRect().top;
        // console.log(sTop); //각 섹션 top 위치값 테스트 //화면 맨위를 기준으로 보이지 않으면 - //화면에서 보이면 +
        
        //화면 상단(0) 기준
        //섹션 윗(top) 부분이 화면 위에서 150px 지점과 같거나 더 위로 올라와있다면 조건문 실행
        if(sTop <= 150){
            // console.log('조건 실행 테스트');
            // console.log(s); //스크롤할때 150 위치보다 올라온 애가 누구인지 인식
            for(let a of aside){
                // console.log(a);
                a.classList.remove('active'); //a가 위에서 반복되기 때문에 또 for를 사용할 이유가 없다   
                if(s.id == a.dataset.target){
                    a.classList.add('active');
                }
            }//aside~a 반복 종료 위치
        }//조건문 종료 위치

    }//for~of section 종료 위치
    
    // console.log('스크롤 중..');

    // nav.textContent = window.scrollY + 'px'; //맨 위 0px부터 시작해서 아래로 내릴수록 숫자가 커짐
    //디자인에 따라 스크롤 출력 값에 소수점이 나올 경우 -> 계산이 쉽도록 정수로 변환하기
    let scrollVal = Math.round(window.scrollY); //Math.round 소수점 반올림 함수
    nav.textContent = scrollVal + 'px';

    //스크롤 위치에 따라 CTA 보이기/숨기기 //스크롤 막대의 위를 기준으로 함
    if(window.scrollY >= 400){
        topCTA.classList.add('active');
    }else{topCTA.classList.remove('active');}

    //스크롤 위치에 따라 header 디자인 변경
    if(window.scrollY >=120){
        header.classList.add('active');
    }else{header.classList.remove('active');}

})// 스크롤 이벤트 종료

//CTA 클릭 이벤트 시 위로 이동(스크롤 밖)
topCTA.addEventListener('click',()=>{
    // window.scrollTo(0,0); //x, y 순서대로 값 입력 //해당 좌표로 바로 이동
    window.scrollTo({left:0, top:0, behavior:'smooth'}) //부드러운 이동이 필요할때
})

//크기 조절 시 인식하는 이벤트 //반응형 웹 활용 가능 
window.addEventListener('resize',()=>{
    // console.log('크기 조절 중..');
})//크기조절 이벤트 종료


