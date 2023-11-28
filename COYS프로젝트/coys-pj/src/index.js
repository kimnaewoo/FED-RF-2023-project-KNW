// 제이쿼리 불러오기
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 리액트 불러오기
import { createRoot } from "react-dom/client";

// 페이지 공통 CSS
import "./css/common.css";

import { MainArea } from "./layout/MainArea";
import { useEffect, useLayoutEffect, useState } from "react";
import { MainPage } from "./pages/MainPage";
import { Sellshop } from "./modules/SellShop";
import { Gnb } from "./modules/Gnb";
import { Menu } from "./modules/Menu";

function App() {
  // 상태변경 관리변수
  const [pgName, setPgName] = useState("main");
  const chgPgName = (v) => {
    setPgName(v);
    $(".all-menu").fadeOut(300);
    // console.log(333);
  };

  // 랜더링후 실행
  useEffect(() => {
    $("#menu").click(() => {
      $(".top , .bottom").toggleClass("on");
      $(".all-menu").fadeToggle(400);
    }); // click
  }); // useEffect
  $(window).scroll(() => {
    let shopTop = $("#shop-area").offset().top;
    let ins = $(".is").offset().top;
    let fk = $(".fk").offset().top;
    let yt = $(".yt").offset().top;
    let top = $(".top").offset().top;
    let bt = $(".bottom").offset().top;
    let logo = $("#gnb img").offset().top;
    // console.log(ins, shopTop);
    if (ins > shopTop) {
      $(".is").css({ color: "#000" });
    } else if (ins < shopTop) {
      $(".is").css({ color: "#fff" });
    }

    if (fk > shopTop) {
      $(".fk").css({ color: "#000" });
    } else if (fk < shopTop) {
      $(".fk").css({ color: "#fff" });
    }

    if (yt > shopTop) {
      $(".yt").css({ color: "#000" });
    } else if (yt < shopTop) {
      $(".yt").css({ color: "#fff" });
    }

    if ((top, bt > shopTop)) {
      $(".top, .bottom").css({ backgroundColor: "#000" });
    } else if ((top, bt < shopTop)) {
      $(".top, .bottom").css({ backgroundColor: "#fff" });
    }
    if (logo > shopTop) {
      $("#gnb img").attr("src", "../images/logo.png");
    } else if (logo < shopTop) {
      $("#gnb img").attr("src", "../images/logo2.png");
    }
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }); // useLayoutEffect

  return (
    <>
      <Gnb />
      <Menu chgPgNameFn={chgPgName} />
      {pgName == "main" ? <MainPage /> : pgName == "sellshop" ? <Sellshop /> : <MainArea />}
    </>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
