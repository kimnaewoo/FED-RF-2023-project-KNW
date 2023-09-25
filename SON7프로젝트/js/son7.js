import dFn from "./domFn.js"

const intro = dFn.qs('.intro');
console.log(dFn,intro);

let hcode = '';
for(let i=1;i<=19;i++){
    hcode += 
    `
    <div><img src="./images/camera/${i}.jpg" alt="intro"></div>
    `;
}

intro.innerHTML = hcode;