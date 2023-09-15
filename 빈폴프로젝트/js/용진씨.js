swipWrap.innerHTML = hcode;
swipNav.innerHTML = icode;
//슬라이드 이미지//////////////////////

const indic = domFn.qsa(".indic li");
swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
    ele.setAttribute("data-seq", idx);
});
swipNav.querySelectorAll("li").forEach((ele, idx) => {
    ele.setAttribute("data-seq", idx);
});
// 화살표 클릭시
abtn.forEach((ele) => {
    domFn.addEvt(ele, "click", abtnSlide);
});
// 블릿 클릭시
indic.forEach((ele) => {
    domFn.addEvt(ele, "click", () => {
        nextSeq = ele.getAttribute("data-seq");
        swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
            if (idx == nextSeq) {
                ele.classList.add("on");
                indic[idx].classList.add("on");
            } else {
                ele.classList.remove("on");
                indic[idx].classList.remove("on");
            }
            clearAuto();
        });
    });
});

//화살표 클릭시 발생되는 함수/
function abtnSlide() {
    if (clickSts) return;
    clickSts = 1;
    setTimeout(() => {
        clickSts = 0;
    }, TIME_SLIDE);

    let isRight = this.classList.contains("swip-next");

    onSlide(isRight);

    clearAuto();
} /////////////abtnSlide함수//////////////////

// 슬라이드 함수(isRight=1?오른쪽:왼쪽)
function onSlide(isRight) {
    // 현재 순번 알아내기
    swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
        if (ele.classList.contains("on")) nextSeq = idx;
    });

    if (isRight) {
        nextSeq++;
        if (nextSeq >= domFn.qsa(".slide-img").length) {
            nextSeq = 0;
        }
    } else {
        nextSeq--;
        if (nextSeq < 0) {
            nextSeq = domFn.qsa(".slide-img").length - 1;
        }
    }

    swipWrap.querySelectorAll(".slide-img").forEach((ele, idx) => {
        if (idx == nextSeq) {
            ele.classList.add("on");
            indic[idx].classList.add("on");
        } else {
            ele.classList.remove("on");
            indic[idx].classList.remove("on");
        }
    });
} /////////////////////////onSlide함수///////////