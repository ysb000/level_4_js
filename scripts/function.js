//1. 내장함수
//alert('이 사이트는 포트폴리오용 사이트입니다.')
// const q1 = prompt('1+1?');

//prompt만 작성 시 답변은 저장되지 않으므로 사용자의 답변을 저장하기 위해서는 변수에 대입하는 과정이 필요
// alert('사용자가 입력한 답은'+ q1 +'입니다.');

// print();
const printBtn = document.querySelector('#print_btn');
// v1. 사용자정의함수를 이벤트함수내에서 호출한 방식(2개 이상 반복일 경우)
// printBtn.addEventListener('click', printFunc);

// v2. 이벤트함수(addEventListener) 내에서 직접 사용자함수를 만드는 방식(반복아닐 경우)
// 객체 이벤트에 내장된 함수라 함수명을 작성하지 않음
// printBtn.addEventListener('click', function(){print();});

// v3. 내장함수에 함수명이 안들어가는데 function 키워드를 써야하는지 의문으로 생긴 새로운 함수
// 화살표 함수 '()=>{}'
    printBtn.addEventListener('click', ()=>{print();});

const num1 = Math.random(); //0-1 사이에 숫자를 랜덤생성
const num2 =Math.floor(Math.random() * 10) + 1; //1-10사이 숫자를 출력 가능
//소수점 아래를 버리고 정수로 작성 5.7 -> 5
console.log(num1);
console.log(num2);

// 변수 생성 = 함수1(함수2()); //함수2 -> 함수1 순으로 처리 후 변수에 대입
// const num3 =Number( prompt('NCS 시험 점수는? 0~100점 사이로 숫자만 입력해주세요.'));
// console.log(num3);
// console.log(typeof(num3)); //데이터타입 확인함수

//2. 사용자정의함수
function printFunc(){
    return print();
}

//3. 함수 스코프, 변수 범위
let b = 20; //전역
let c = 30; //전역

function test(){
    let a =10; //함수 내부에서 선언된 지역 변수
    return console.log(a+b); //ok
}
test();
// console.log(a); //error
console.log(b+c); 

//4. 함수의 매개변수
// 반복되는 함수 내에 달라지는 매개값이 있을 때 사용
// 동화 : 헨젤과 그레텔이 집을 찾아오는 반복 방법/조약돌 -> 빵조각
// 기본값 지정 가능 -> 사용자가 작성 시 변경됨 
function story1(boy='헨젤', girl='그레텔', mapData){ //함수생성(매개변수생성)
    let person = [boy, girl];
    let result = person[0]+'과'+person[1]+'이'+ mapData +'을 따라 집을 찾아갔습니다.';//매개변수 사용
    //헨젤과 그레텔이 조약돌을 이용해 따라 찾아갔습니다.
    return console.log(result);
}
story1('봄','여름', '조약돌'); //함수호출(매개변수 값 대입)
story1(undefined,undefined,'빵 부스러기'); //함수호출(매개변수 값 대입), undefined -> 정의되지 않음을 적어주면 기본값이 옴

//동화2 story2 함수 생성, 매개변수 달라지는 데이터 기준으로 추가 생성(이름은 자유)
//나무꾼은 금도끼를 잃어버렸습니다.
//나무꾼은 쇠도끼를 잃어버렸습니다.
function story2(male='나무꾼', toolData='쇠도끼'){
    let person = male;
    let result = person+'은 '+toolData+'를 잃어버렸습니다.';
    return console.log(result);
}
story2() //매개변수 안적어서 모두 기본값
story2(undefined, '금도끼'); //앞 매개변수 -> 정의x 기본값, 뒤 매개변수 대입
story2('주인공'); //앞 매개변수 대입, 뒤 매겨변수 정의x -> 기본값

// 카페 키오스크
// 아이스아메리카노 1잔 주문완료 
// function 간편버전 : => 이벤트 내에서 주 사용 (화살표 함수)
//''+변수+'' 간편버전 : `문자${변수}` (템플릿 문자열)
function cafeKiosk(menu, number=1){
    const order = `${menu} ${number}잔 주문완료`;
    return console.log(order);
};
cafeKiosk('아이스 아메리카노');
cafeKiosk('카페라떼', '2');

// ICE, HOT, 메뉴, 메뉴 개수까지 선택가능한 함수 만들기
// 출력 예) ICE 카페라뗴 2잔 주문 완료
function cafeOrder(tem, me, number=1){
    const temperature = ['ICE', 'HOT'];
    const menu = ['아메리카노', '카페라떼','녹차라떼','초코라떼']
    const order = `${temperature[tem]} ${menu[me]} ${number}잔 주문완료`;
    return console.log(order);
};
cafeOrder(0,0,1);
cafeOrder(1,2,3);

//5. 함수 리턴
//함수 내부 실행 데이터를 사용자가 원하는 방식으로 출력되게 만드는 키워드
//return 작성시 옆에 작성된 명령만 실행하고 끝내겠다는 뜻으로 아래 명령은 실행 되지 않음
// return;으로 끝내면 종료하겠다는 뜻
function japangi(drink, num=1){
    const order = `${drink} ${num}개 주문완료`;
    return order; // order 변수에 저장된 값만 함수 외부로 반환(종료)// 값만 가져와서 출력하고 싶은 곳에 호출이 가능함 ex) 인쇄하기 버튼의 글자를 order의 출력값으로 변경
    return; //리턴 뒤에 아무것도 안적으면 함수만 강제종료
    return console.log('잔액이 부족합니다.'); // 리턴 뒤에 콘솔실행하고 함수 종료
    console.log(order); //리턴 아래 써있는 명령은 절대 실행안됨
}
japangi('생수');// 함수 내부 리턴에서 출력함수가 정해져있을때 데이터만 전달방식
console.log(japangi('사이다')); 
// 함수 내부 리턴에서 출력함수가 정해지지않고 데이터만 반환했을때 함수 밖에서 출력함수를 정하는 방식
printBtn.textContent = japangi('콜라');