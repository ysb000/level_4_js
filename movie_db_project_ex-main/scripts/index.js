//index.js
//기존 태그 선택 querySelector() //ul을 선택해서
//기존 태그 복제 cloneNode()
//새로운 태그 생성 createElement() //li를 만들고
//생성한 대상을 붙여넣기appendChild() //ul에 붙여넣기

const movieWrap1 = document.querySelector('.movie_wrap1'); //선택 ul 대상
const animeWrap = document.querySelector('.anime_wrap');

//Q1. 어벤져스 DB 1개 li에 삽입하기
// const movieLi = document.createElement('li'); // li 생성
//붙여넣기 이전에 내용 작성할 것
//textContent - 태그 없이 내용 삽입
//innerHTML - 태그 포함 내용 삽입
// movieLi.textContent = '어벤져스'; //db를 사용하지 않아서 X
// movieLi.textContent = moviesDB[0].title; //moviesDB 변수 배열 중 첫 번째([0])의 title 속성
// movieLi.textContent = moviesDB[0].date; // = 대입(기존값을 제거하고 대입)
// movieLi.textContent += moviesDB[0].date; // += 복합대입(기존값에 더해서 대입상
// movieWrap1.appendChild(movieLi); //생성한 li를 ul에 붙여넣기

//Q2. 영화 DB 1~9개 모두 출력하기
for(let i=0; i<9; i++){
    // console.log(i);//0~8까지 반복 //배열의 인덱스 
    // //for가 해당 인덱스일때 제목,개봉일,포스터,li를 가져온 후 붙여넣기
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${moviesDB[i].title}</h3>`;
    movieLi.innerHTML += `<p>${moviesDB[i].date}</p>`;
    movieLi.innerHTML += `<a href="#"><img src="${moviesDB[i].poster}" alt = "${moviesDB[i].title}"></a>`;
    movieWrap1.appendChild(movieLi);
}

for(let i=0; i<10; i++){
    // console.log(i);
    const animeLi = document.createElement('li');
    animeLi.innerHTML = `<h3>${animeDb[i].title}</h3>`;
    animeLi.innerHTML += `<p>${animeDb[i].date}</p>`;
    animeLi.innerHTML += `<a href="#"><img src="${animeDb[i].poster}" src="${animeDb[i].title}"></a>`;
    animeWrap.appendChild(animeLi);
    
}