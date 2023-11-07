import dFn from "./domFn.js"

const msg = dFn.qsa('p');
const cap = dFn.qsa('.intro-captain');
const intro = dFn.qs('#intro-area');

setTimeout(()=>{
    msg.forEach((ele)=>{
        ele.style.display='block';
    })
},1000);
setTimeout(()=>{
    cap.forEach((ele)=>{
        ele.style.display='block';
    })
},2000);
setTimeout(()=>{
    intro.style.display='none';
},3000);

