//login.js
//탭 제목 클릭 시 기존/비회원 조회 화면 변경
const tab_title = document.querySelectorAll('button[id*=member-btn]');
const tab_contents = document.querySelectorAll('#login-frm .contents > ul');

console.log(tab_title)
console.log(tab_contents)

tab_title[0].addEventListener('click',()=>{ loginConFunc(0) })
tab_title[1].addEventListener('click',()=>{ loginConFunc(1) })

function loginConFunc(index){
    tab_title[0].classList.remove('active');
    tab_title[1].classList.remove('active');
    tab_title[index].classList.toggle('active');

    tab_contents[0].classList.add('display-hide');
    tab_contents[1].classList.add('display-hide');
    return tab_contents[index].classList.toggle('display-hide');
}