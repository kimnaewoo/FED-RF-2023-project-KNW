window.addEventListener("DOMContentLoaded", loadFn);
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

function loadFn() {
    console.log("로딩완료!!");

    const body = qs('body');
const moving = qs('.flying-poster');
console.log("추가대상:",body,moving);
    
    
    
}