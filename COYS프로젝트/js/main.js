import dFn from "./domFn.js"

const msg = dFn.qsa('p');
const mad = dFn.qs('.mad');
const start = dFn.qs('#start')
const h1 = dFn.qs('#top-area .logo-intro');
const vd = dFn.qs('#top-area video');



setTimeout(()=>{
    msg.forEach((ele)=>{
        ele.style.display='block';
    })
},1000);

setTimeout(()=>{
    mad.classList.add('on');
},2000);
setTimeout(()=>{
    vd.style.filter= 'brightness(0.7)';
    
},6500);

