//dom2.js
//반복되는 컨텐츠 복사
//복사할 대상과 붙여넣을 위치 변수 생성
const m_menu = document.querySelector('.m_menu nav');
const d_menu = document.querySelector('.d_menu');

console.log(m_menu, d_menu);
//복사할 대상 지정
const cloneMenu = m_menu.cloneNode(true);
console.log(`복제대상 확인 : ${cloneMenu}`)
console.log(cloneMenu);
//복상한 대상 붙여넣기
d_menu.appendChild(cloneMenu);
