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

