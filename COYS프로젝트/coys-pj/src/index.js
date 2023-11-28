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
    $(".all-menu").fadeOut(300)
    console.log(333);
  };

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
    console.log(scTop, shopTop);

    if (scTop > (shopTop * 1) / 10) {
      $(".sns-menu").css({ color: "#000" });
      $(".top, .bottom").css({ backgroundColor: "#000" });
      $("#gnb").css({ borderRight: "0.1px solid #000" });
    } else if (scTop > (shopTop * 1) / 4) {
      $(".logo").attr("src", "../images/logo.png");
    }
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }); // useLayoutEffect

  return (
    <>
      <Gnb />
      <Menu chgPgNameFn={chgPgName} />
      {pgName == "main" ? (
        <MainPage />
      ) : pgName == "sellshop" ? (
        <Sellshop />
      ) : (
        <MainArea />
      )}
    </>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
