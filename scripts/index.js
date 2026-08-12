//1. 변수
const titleBig = document.querySelector('h1');
let itemPrice =24600;
const result1p = document.querySelector('.result1');
let replaceData = itemPrice.toLocaleString('ko-kr');//데이터 종류 변경변수(목적에 따라 세밀하게 나눔) 
//toLocaleString(국가별 기호) : 숫자 -> 문자
/* ----------------------------연습(웹은행 150만원 입금) */
let webBank = 1500000;
const result2p = document.querySelector('.result2');
let replaceBank = webBank.toLocaleString('fi-fi'); /* 국가별 기호에 따라 차이 발생 fi-fi: 필란드*/

//출력 테스트 콘솔
console.log(itemPrice, titleBig, result1p, replaceData);
console.log(webBank, result2p, replaceBank);

//실행결과
result1p.textContent = replaceData+'원';
result2p.textContent = replaceBank+'원';

/* ============================================ */
//2. 배열(갯수 제한 없이 원하는 다양한 값을 출력가능)
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1 > li');
const studyDt = document.querySelectorAll('.study dt');
const studyDd = document.querySelectorAll('.study dd');

console.log(list1Li);
console.log(studyDt, studyDd);
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

list1Li[0].textContent = money[0].toLocaleString('ko-kr')+'원';
list1Li[1].textContent = money[1].toLocaleString('ko-kr')+'원';
list1Li[2].textContent = money[2].toLocaleString('ko-kr')+'원';

list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itemPriceOriginal[0];

studyDt[0].textContent = itemName[0];
studyDd[0].textContent = itemPriceOriginal[0];
studyDt[1].textContent = itemName[1];
studyDd[1].textContent = itemPriceOriginal[1];

// -----------------------------배열 정리
let plate = ['계란','스테이크','샐러드','김치','단무지','쌀밥','콩나물국']

console.log(plate);
console.log(plate[0]);
console.log(plate[6]);
console.log(plate[3]);
// 대입 값을 바꾼 후라면 그 후에 출력할 것
plate[1] = '연어';
console.log(plate[1]);

//3. 객체
const movie = { //객체 변수 == 줄여서 객체
    name:'스파이더맨', //속성:값, 구조로 작성
    price:12000,
}
console.log(movie.name); //객체.속성 출력
console.log(movie.price);
//----------------------객체 + cgv DB연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate);

cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;
cgvAge.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent = movieDb[0].genre

//------------------------객체변수 연습
const dessertTray = {
    top:['파랑 마카롱', '분홍 마카롱','초록 마카롱','노랑 마카롱'],
    middle:['슈크림','머핀','에그타르트'],
    bottom:['방울토마토','청포도','오렌지'],
}
console.log(dessertTray);
console.log(dessertTray.top[3]);
console.log(dessertTray.middle[0]);
console.log(dessertTray.bottom[1]);
dessertTray.bottom[2] = '망고';
console.log(dessertTray.bottom[2]);

//-------------------------------증감 연산자
let num = 1;
console.log(num); //1(변수가 처음 대입된 값 테스트)

num++; // 1 증가
console.log(num); //2(위 연산 후 실행 테스트)

num--; //1 감소
console.log(num); //1
//-------------------------------증감 연산자, 2개의 변수 활용
let number1 = 10;
let number2;

console.log(number1, number2);

number2 = number1++;
//증감연산자를 변수 뒤에 붙이면?
// 기존 변수값(number1)은 대입을 만나 number2로 먼저 보내고 
// ++로 number1을 나중에 증가시킨다(후처리)
console.log(number1, number2);