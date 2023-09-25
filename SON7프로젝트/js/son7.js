import dFn from "./domFn.js"

const intro = dFn.qs('.intro');
console.log(dFn,intro);

let hcode = '<div>';
for(let i=1;i<=19;i++){
    hcode += 
    `
    <img src="./images/intro/camera${i}.jpg" alt="intro">
    `;
}

intro.innerHTML = hcode;