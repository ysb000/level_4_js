//for3.js
//for~in
//2개 이상의 인덱스로 이루어진 배열,객체, DOM요소 순회하는 반복문
const flower = ['장미', '민들레','수선화', '나팔꽃'];

//for (let 초기 변수 in 변수에 대입할 대상){반복처리문} //변수에 대입할 대상(인덱스)이 초기변수에 저장
for(let f in flower){
    console.log(f);
    console.log(flower[f]); //for in이 추출한 인덱스를 활용해서 배열값 출력
}

//객체 인덱스 추출하기
const birthday = [{
    date:'1월',
    flower:'장미',
},{
    date:'2월',
    flower:'민들레',
}];

console.log('-------------')
//위 변수 활용 - 인덱스 추출, 1월 2월, 장미, 민들레
for(let b in birthday){ //버스데이의 인덱스를 b에 저장
    console.log(b); //저장된 인덱스 추출
    console.log(birthday[b].date); 
    console.log(birthday[b].flower); 
}
console.log('-------------')

//로그인 오류 검증 반복문 + 조건문(버튼 클릭 시 수행)
const loginBtn = document.querySelector('#login_btn');
const inFrm = document.querySelector('#inFrm'); //폼 태그(안쪽 검사 input들 잡기 위한 부모대상)
//form 안에 있는 input을 변수로 할 때 //1. 각 html을 각각 변수로 잡는 방법 //2. form태그의 자식으로 잡는 방법

//로그인 버튼 클릭 시 수행 함수 //모든 검증은 이벤트 클릭 안에 작성할 것
loginBtn.addEventListener('click', ()=>{
    const valFrm = { //인풋의 구분을 위해 객체{}생성
        id:inFrm.user_id.value, //속성:폼.아이디.값//폼 태그 안에 아이디의 값 -> html에서 아이디를 특정하는 것은 id 속성으로 id속성을 작성
        pw:inFrm.user_pw.value,
    }
    console.log(valFrm);//위 변수 출력
    console.log(valFrm.id); //개별 속성 출력문법 v1 기본
    console.log(valFrm['id']); //객체 속성 출력문법 v2 for~in 

    for(let v in valFrm){
        console.log(v); //객체를 순회하기위해 id, pw 속성을 추출
        console.log(valFrm[v]);//속성이 가지고 있는 실제 값 출력
        if(valFrm[v] === ''){
            document.querySelector('#login_msg').textContent = '값을 입력하세요'
        }
    }

})//클릭 이벤트 종료

console.log('---------------');

//for~of
//for(let 초기변수생성 of 대입할 변수대상){반복처리문} 
const animals = ['강아지','고양이','앵무새','금붕어','돌고래'];

for(let a in animals){console.log(a);} //index 출력 확인 //0~4
for(let a of animals){console.log(a);} //object 출력 확인 //강아지~돌고래

const list = document.querySelector('.list');

for(let a of animals){
    const li =document.createElement('li');
    li.textContent = a;
    li.style.borderBottom = '2px solid #000';
    li.style.padding = '4px 6px';
    list.appendChild(li);
}//animals 반복종료

const animalsLi = document.querySelectorAll('.list li');
for(let i of animalsLi){
    console.log(i); //생성 li 출력 확인
    i.addEventListener('mouseover',()=>{
        i.style.borderColor = 'red'; //개별 대상으로 인식하여 적용
        
    })
}

console.log('---------------');

//forEach(배열) => for~in(인덱스) + for~of(요소)
const tab_title = document.querySelectorAll('.tab_title > a');
const tab_contents = document.querySelectorAll('.tab_contents > li > ul');

//특정 객체의 index만 사용할 때 for~in
//특정 객체의 object만 사용할 때 for~of
//특정 객체의 index, object 모두 사용할 때 forEach
//태그의 가족 관계로는 탭을 이룰 수 없고 갯수로 확인할 것 -> 내가 클릭한 인덱스(in)와 같은 인덱스를 확인(of)하여 보이게 한다.
//객체.forEach((객체매개변수, 인덱스매개변수, 배열매개변수)=>{})
//매개변수명은 자유롭게 설정 가능
tab_title.forEach((o, i)=>{ //object index array
    console.log(o, i);
    o.addEventListener('click',()=>{
        resetFunc(tab_title); //전체 제목의 클래스 비활성화
        o.classList.add('active'); //클릭 시 클래스 이름에 active 부여 //클릭한 제목만 클래스 활성화
        console.log(i); // 클릭한 인덱스 테스트

        resetFunc(tab_contents); //콘텐츠 클래스 비활성화
        tab_contents[i].classList.add('active'); //클릭한 제목 인덱스와 동일한 콘텐츠 인덱스 보이기 
    })
})
//전체 비활성화 함수
function resetFunc(target){
    for(let reset of target){reset.classList.remove('active');}
    return
}