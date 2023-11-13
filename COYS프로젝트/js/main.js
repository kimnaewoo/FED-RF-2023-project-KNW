import dFn from "./domFn.js"

const msg = dFn.qsa('p');
const mad = dFn.qs('.mad img');
const son = dFn.qs('.son img');
const rom = dFn.qs('.rom img');
const cap = dFn.qsa('.intro-captain');
const intro = dFn.qs('#intro-area');

setTimeout(()=>{
    msg.forEach((ele)=>{
        ele.style.display='block';
    })
},1000);
setTimeout(()=>{
    rom.style.transform='translate(-40%, -50%)';
},2000);
setTimeout(()=>{
    mad.style.transform='translate(-36%, -50%)';
},3500);
setTimeout(()=>{
    son.style.transform='translate(-45%, -50%)';
},5000);
setTimeout(()=>{
    intro.style.display='none';
},7000);

