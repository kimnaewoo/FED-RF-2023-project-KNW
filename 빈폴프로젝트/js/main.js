// 1-1. 페이지변수
let pg_num = 0;
// 1-2. 휠상태 변수
let sts_wheel = 0;
// 1-3. 전체페이지수
let total_pg;
// 1-4. 전체 section 요소
let ele_page;

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

setTimeout(() => {
  window.scrollTo(0, 0);
}, 500);

window.addEventListener("DOMContentLoaded", loadFn);
window.addEventListener("wheel", wheelFn,{passive:false});

function loadFn() {
  ele_page = qsa("section");
  console.log("페이지요소:", ele_page);
  total_pg = ele_page.length;
  // console.log('페이지요소:',total_pg);

  const cbox = qsa(".cbox_container");
  const img = qsa(".cbox");
}
function wheelFn() {
  event.preventDefault();
  if (sts_wheel) return;
  sts_wheel = 1;
  setTimeout(() => {
    sts_wheel = 0;
  }, 500);
  // console.log("휠이 잘되니?");
  let delta = event.wheelDelta;
  // console.log("휠델타?", delta);
  if (delta < 0) pg_num++;
  else pg_num--;
  if (pg_num < 0) pg_num = 0;
  if (pg_num == total_pg) pg_num = total_pg - 1;
  window.scrollTo(0, window.innerHeight * pg_num);
}

const move = qsa('.cbox');

move.forEach(ele=>{
  ele.addEventListener('click',showMove);
})
function showMove(){
 console.log(showMove);
}


const abtn = qsa('.btn');
const slider = qs('.slider');


abtn.forEach(ele=>{
  ele.onclick = ()=>{
    // console.log(ele.classList.contains('btn-right'));
    if(ele.classList.contains('btn-right')){
      slider.style.left = '-100%';
      slider.style.transition = '.6s ease-in-out';
      setTimeout(() => {
        slider.appendChild(qsa('.slider>div')[0]);
        slider.style.left = '0';
        slider.style.transition = 'none';
      }, 600);
      
    }
    else{
      let temp = qsa('.slider>div');
      slider.insertBefore(temp[temp.length-1],temp[0]);
      slider.style.left = '-100%';
      slider.style.transition = 'none';

      setTimeout(() => {
        slider.style.left = '0';
        slider.style.transition = '.6s ease-in-out';
      }, 0);

    }

    clearAuto();

  }; ///////// click /////////////
}); //////////// forEach ////////////

let autoI, autoT;

function autoSlide(){
  autoI = setInterval(() => {
    slider.style.left = '-100%';
        slider.style.transition = '.6s ease-in-out';
        setTimeout(() => {
          slider.appendChild(qsa('.slider>div')[0]);
          slider.style.left = '0';
          slider.style.transition = 'none';
        }, 600);
    
  }, 8000);
}

autoSlide();

function clearAuto(){
  clearInterval(autoI);
  clearTimeout(autoT);
  autoT = setTimeout(autoSlide,3000);
}

