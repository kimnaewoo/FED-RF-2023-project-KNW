import dFn from "./domFn.js"

const start1 = dFn.qs('.start1');
const start2 = dFn.qs('.start2');
const start = dFn.qs('#start')

setTimeout(() => {
    start1.style.transform='translateX(-100%)';
    start2.style.transform='translateX(100%)';
}, 2000);

setTimeout(()=>{
    start.style.display="none";
},5000);

