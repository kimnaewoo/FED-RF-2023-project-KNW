// 제이쿼리 불러오기
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 리액트 불러오기
import { createRoot } from "react-dom";

// 페이지 공통 CSS
import "./css/common.css";

import { Intro } from "./layout/Intro";
import { Gnb } from "./modules/gnb";
import { TopArea } from "./layout/TopArea";
import { MainArea } from "./layout/MainArea";
import { FooterArea } from "./layout/FooterArea";
import { useEffect, useLayoutEffect } from "react";
import { Menu } from "./modules/Menu";

// 인트로 이벤트
setTimeout(() => {
  $(".fir").css({ top: "60%", opacity: 1 });
}, 1000);
setTimeout(() => {
  $(".sec").css({ top: "73%", opacity: 1 });
}, 2000);
setTimeout(() => {
  $(".rom img").css({ transform: "translate(-40%, -50%)" });
}, 3000);
setTimeout(() => {
  $(".mad img").css({ transform: "translate(-36%, -50%)" });
}, 4000);
setTimeout(() => {
  $(".son img").css({ transform: "translate(-45%, -50%)" });
}, 5000);
setTimeout(() => {
  $("#intro-area").css({ height: "0vh" });
  $("#top-Area").css({ display: "block" });
}, 7000);

function App() {
  // 랜더링후 실행
  useEffect(() => {
    $("#menu").click(() => {
      $(".top , .bottom").toggleClass("on");
      $(".all-menu").fadeToggle(400);
    }); // click
  }); // useEffect

  $(window).scroll(function () {
    let shopTop = $("#shop-area").offset().top;
    const scTop = $(window).scrollTop();
    console.log(scTop,shopTop);

    if (scTop > shopTop*1/10) {
      $('.sns-menu').css({ color: "#000" })
      $('.top, .bottom').css({backgroundColor:'#000'})
      $('#gnb').css({borderRight: '0.1px solid #000'})
    }
    else if(scTop > shopTop*1/4){
      $(".logo").attr("src", "../images/logo.png");     
    }
  });
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }); // useLayoutEffect
  return (
    <>
      <Gnb />
      <Menu />
      <Intro />
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
