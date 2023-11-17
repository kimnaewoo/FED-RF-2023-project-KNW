import dFn from "./domFn.js"

const msg = dFn.qsa('p');
const mad = dFn.qs('.mad img');
const fir = dFn.qs('.fir');
console.log(fir);
const sec = dFn.qs('.sec');
const son = dFn.qs('.son img');
const rom = dFn.qs('.rom img');
const cap = dFn.qsa('.intro-captain');
const intro = dFn.qs('#intro-area');
const topArea = dFn.qs('#top-area');

setTimeout(()=>{
    fir.style.top='60%';
    fir.style.opacity=1;
},1000);
setTimeout(()=>{
    sec.style.top='73%';
    sec.style.opacity=1;
},2000);
setTimeout(()=>{
    rom.style.transform='translate(-40%, -50%)';
},3000);
setTimeout(()=>{
    mad.style.transform='translate(-36%, -50%)';
},4000);
setTimeout(()=>{
    son.style.transform='translate(-45%, -50%)';
},5000);
setTimeout(()=>{
    intro.style.height='0vh';
    topArea.style.display='block';
},7000);

// 맨 위 메뉴와 중간 메뉴 변수 할당
const snsMenu = dFn.qs(".sns-menu");
const Menu = dFn.qs("#menu");
const MainArea = dFn.qs('#main-area')
// 중간 메뉴바의 위치 계산            
let MainAreaTop = MainArea.offsetTop;

// 스크롤 이벤트 핸들러
window.addEventListener("scroll", function(){

    // 스크롤하는 높이를 체크
    let scrollPosition = window.scrollY;

    // 스크롤하는 위치가 중간 메뉴보다 클 경우 (중간 메뉴보다 더 아래로 스크롤 할 경우)
    if (scrollPosition >= MainAreaTop) {
        // 맨 위 메뉴바의 display 속성을 none으로 변경

        snsMenu.style.color = "black";
        Menu.style.color = 'black';
    } 
    // else {

    //     // 맨 위 메뉴바의 display 속성을 block으로 변경                    
    //     topMenu.style.display = "block";

    //     // 중간 메뉴바를 다시 원래 속성으로 변경
    //     middleMenu.style.position = "static";     
    //     middleMenu.style.opacity = 0.5;     

    //     // 중간 메뉴바의 투명도 이벤트 리스너 등록
    //     middleMenu.addEventListener("mouseover", setOpacityToOne);
    //     middleMenu.addEventListener("mouseout", setOpacityToHalf);
    // }
});

