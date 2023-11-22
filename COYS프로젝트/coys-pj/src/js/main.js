import dFn from "./domFn.js";

const mad = dFn.qs(".mad img");
const fir = dFn.qs(".fir");
const sec = dFn.qs(".sec");
const son = dFn.qs(".son img");
const rom = dFn.qs(".rom img");
const intro = dFn.qs("#intro-area");
const topArea = dFn.qs("#top-area");

// 인트로 이벤트 
setTimeout(() => {
  fir.style.top = "60%";
  fir.style.opacity = 1;
}, 1000);
setTimeout(() => {
  sec.style.top = "73%";
  sec.style.opacity = 1;
}, 2000);
setTimeout(() => {
  rom.style.transform = "translate(-40%, -50%)";
}, 3000);
setTimeout(() => {
  mad.style.transform = "translate(-36%, -50%)";
}, 4000);
setTimeout(() => {
  son.style.transform = "translate(-45%, -50%)";
}, 5000);
setTimeout(() => {
  intro.style.height = "0vh";
  topArea.style.display = "block";
}, 7000);
///////////////////////////////////////////////////////////////////////////

// const snsMenu = dFn.qs(".sns-menu");
// const Menu = dFn.qs("#menu div");
// const TopArea = dFn.qs("#top-area");

// window.addEventListener("scroll", function () {
//   let scrollPosition = window.scrollY;
//   let TopAreaTop = TopArea.scrollY;

//   if (scrollPosition == TopAreaTop) {
//     snsMenu.style.color = "black";
//     Menu.style.color = "black";
//   }
// });

// GNB 이벤트 
$('#menu').mouseover(()=>{
  $('.top , .bottom').addClass('on')
})
$('#menu').mouseleave(()=>{
  $('.top , .bottom').removeClass('on')
})



