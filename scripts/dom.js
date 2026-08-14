// dom.js

// 복습) 함수, 매개변수, 리턴
// 더하기, 빼기 계산기 -> 연산자 기호는 문자처리할 것
function calcFunc(n1, n2, oper='+'){
    let num1 = n1;
    let num2 = n2;
    return oper == '+' ? num1+num2: num1-num2; 
    //조건 ? 참 : 거짓;
    let total = num1 + num2;
    return total;
}
// calcFunc(); 어디에 실행할 것인지에 대한 기준이 없어 값이 보이지 않음
console.log(calcFunc(3, 5, '-'));

// 할인율 계산기(사용자 입력가격은 다르고, 할인 고정)
// 계산법) (100-5) /100 =0.95
//판매가 * 0.95 =할인판매가
function discountFunc(price){
    const discount5 = (price * 0.95).toLocaleString('ko-kr');
    const discount10 = (price * 0.9).toLocaleString('ko-kr');
    const discount20 = (price * 0.8).toLocaleString('ko-kr');
    const discount30 = (price * 0.7).toLocaleString('ko-kr');
    const discount40 = (price * 0.6).toLocaleString('ko-kr');
    const discount50 = (price * 0.5).toLocaleString('ko-kr');
    return `사용자 입력가격: ${price.toLocaleString('ko-kr')}원 기준
            5% 할인가 : ${discount5}원,
            10% 할인가 : ${discount10}원,
            20% 할인가 : ${discount20}원,
            30% 할인가 : ${discount30}원,
            40% 할인가 : ${discount40}원,
            50% 할인가 : ${discount50}원`
};
console.log(discountFunc(20000));

// 1. 익명함수
//이벤트 함수 내에 이름없이 만드는 일회성 함수
const btn1 = document.querySelector('#btn1');
// 버튼 클릭 시 버튼 색상 변경(일회성)
/* btn1.addEventListener('click', function(){
    btn1.style.color='red';
}); */

// 화살표함수
btn1.addEventListener('click', ()=>{
    btn1.style.color='red';
});

// 일반 반복 함수(생성된 위치 위/아래 호출이 가능)
func1(); //ok
function func1(){
    return console.log('일반함수 테스트');
} 
func1(); //ok

//이벤트 밖에서 사용하는 익명함수의 또다른 예시
//변수 안에서 익명함수 생성
//생성된 위치 기준으로 밑에서만 사용이 가능하다, 방향이 확실해서 코드볼 때 편하다
// func2(); //error
const func2 = function(){
    return console.log('일반함수 테스트');
}
func2();

const func3 = ()=>{
    return console.log('일반함수 테스트-화살표');
}
func3()

//2. 콜백함수(함수 안에 또 다른 함수 호출)
function orderCoffee(callBack){
    return console.log('sns 이벤트 무료커피 나왔습니다.');
}
function sns(){
    return console.log('sns 후기 업로드 완료');
}
orderCoffee(sns);
//3. DOM data-*
const cart_buy_div = document.querySelector('.cart_buy');
//html data-* 속성은 자바스크립트에서 dataset.* 읽을 수 있음
let dataResult = cart_buy_div.dataset.name;
console.log(`dataReult 값은 ${dataResult}`);

//수량 증감 data-* 속성 활용
const countNumSpan = document.querySelector('.count_num');
const plusBtn =document.querySelector('#plus');
const minusBtn =document.querySelector('#minus');
console.log(countNumSpan.dataset.count);

//위 span 변수에 초기값 1대입
countNumSpan.textContent = countNumSpan.dataset.count;
//  + 클릭하면 span값이 1씩 증가(익명함수 활용)
plusBtn.addEventListener('click', ()=>{
    console.log(typeof(countNumSpan.dataset.count)); //문자로 인식, 계산불가
    let currentNum= Number(countNumSpan.dataset.count); //문자를 숫자로 변환해서 저장 
    console.log(currentNum, typeof(currentNum)); //숫자로 변경된 점 확인
    currentNum <10 ? (()=>{
        let plusTotal = ++currentNum; //숫자로 변환한 변수를 1증가해서 담은 증가변수
        countNumSpan.dataset.count =  plusTotal; //증가된 변수를 실제 data속성에 업데이트
        countNumSpan.textContent = plusTotal; //증가된 변수를 사용자가 보는 화면에 출력
    })() : alert('재고가 부족합니다.');
})

//  - 클릭하면 span값이 1씩 감소(익명함수 활용)
minusBtn.addEventListener('click',()=>{
    let currentNum= Number(countNumSpan.dataset.count);
    //삼항 조건 연산자 활용(수량이 1이상일때만 감소)
    currentNum > 1 ? (()=>{
        let minusTotal = --currentNum;
        countNumSpan.dataset.count = minusTotal;
        countNumSpan.textContent = countNumSpan.dataset.count;
    })() : alert('최소 주문 수량입니다.');
    // countNumSpan.textContent = minusTotal;
})
//변수 목적 정리
//countNumSpan 수량 표시되는 span 태그
//plusBtn: + 버튼 변수
//currentNum: countNumSpan의 데이터 속성을 숫자로 변환한 변수 