window.addEventListener("DOMContentLoaded", loadFn);
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);


function loadFn() {
    console.log("로딩완료!!");
     
    const body = qs("body");
    const moving = qs(".flying-poster");
    console.log("추가대상:", body, moving);

    body.onmousemove = (e) => {
        console.log("x:", e.screenX, "/y:", e.screenY);
        moving.style.top = e.screenY + "px";
        moving.style.left = e.screenX + "px";
    };
    body.onmouseenter = () => {
        moving.style.backgroundImage = `url(${
            img_src[minfo[0].innerText == "" ? "기본" : minfo[0].innerText]
        })`;
        // moving.style.display = "block";
    };
   
}

// startSS();

