// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1 == big1
//small2 == big2
//1.---------------------------변수
const smallThum = document.querySelectorAll('.small_thum img');
const bigThum = document.querySelector('.big_thum img');
console.log(smallThum, bigThum);
//2.---------------------------함수

//3.---------------------------이벤트
/* v1 */
/*  함수 */
/* function thumFucn(target1, target2){
    target1.src = target2.src;
} */
/* 이벤트 */
/* smallThum[0].addEventListener('mouseover',()=>{
    thumFucn(bigThum, smallThum[0])
});
smallThum[1].addEventListener('mouseover',()=>{
    thumFucn(bigThum, smallThum[0])
}); */
/* ----------------------------------------------------- */
/* v2 */
smallThum[0].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[0].src;
});
smallThum[1].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[1].src;
});

/* -------------------------상품옵션 선택에 따른 주문 정보+가격 8/28 */
// 목표1) 색상 선택 시 선택한 정보를 data-* 속성에 대입하고 대입한 값 확인하기
//선택한 DOM 대상이 select-option 태그라면 사용해야하는 문법(아래)
//DOM.options[DOM.selectedIndex].text //DOM 명만 달라짐 사용자가 선택한 옵션의 글자
//DOM.options[DOM.selectedIndex].value
//변수
const colorSelect = document.querySelector('select[id=color]');
const sizeSelect = document.querySelector('select[id=size]');

const optResult = document.querySelector('.opt_result');
console.log(colorSelect, optResult);

//함수
//주문옵션 숨기기/보이기 함수
function showHideFunc(target, visible = 'none'){
    target.style.display = visible;
}
// 옵션 선택시 주문옵션에 출력 함수
function optResultFunc(dom, dataValue){
    if(dom.selectedIndex > 0){
        let changeOpt = dom.options[dom.selectedIndex].text; 
        dom.dataset.dataValue = changeOpt;
        showHideFunc(optResult,'flex');
        return optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color} / 사이즈 : ${sizeSelect.dataset.size}`;
    } 
}

// 선택옵션 영역 초기 숨기기
showHideFunc(optResult);

//(위 함수 호출 이용한 이벤트 함수)
sizeSelect.addEventListener('change', ()=>{optResultFunc(sizeSelect, 'size')});
colorSelect.addEventListener('change', ()=>{optResultFunc(colorSelect, 'color')});

//select 태그 변수 이벤트를 제작 시 사용해야하는 이벤트 종류 : change
/* colorSelect.addEventListener('change',()=>{
    if( colorSelect.selectedIndex > 0){//색상(안내문)을 눌렀을때 인식되지 않게하기 위해서 안내문의 인덱스는 항상 0  
            // console.log('change 변경 확인') //콘솔에서 확인함으로써 오류 지점 체크
        let changeOpt = colorSelect.options[colorSelect.selectedIndex].text; //선택옵션 변수 저장
        // console.log(changeOpt); //위 변수 test
        //data-* 속성에 사용자가 선택한 정보 저장하기
        //dom.dataset.속성명; //읽기
        //dom.dataset.속성명 = 값; //수정, 삭제 -> '' 데이터가 없다
        colorSelect.dataset.color = changeOpt;
        console.log(colorSelect.dataset.color);

        //선택생상옵션이 opt_result의 자식 result "색상 :" 자리에 삽입
        showHideFunc(optResult, 'flex');
        optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}`;
    }
}) */

//---------------------------------------------- 사이즈 옵션 선택시 주문옵션에 출력하기
/* sizeSelect.addEventListener('change', ()=>{
    if(sizeSelect.selectedIndex > 0){
        let changeOpt = sizeSelect.options[sizeSelect.selectedIndex].text; 
        // console.log(changeOpt);
        sizeSelect.dataset.size = changeOpt;
        
        showHideFunc(optResult,'flex');
        optResult.children[0].textContent = `사이즈 : ${sizeSelect.dataset.size}`;
    }
}) */