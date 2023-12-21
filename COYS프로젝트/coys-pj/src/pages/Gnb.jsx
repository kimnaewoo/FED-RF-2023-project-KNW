import "../css/gnb.css";

import $ from "jquery";
import { Menu } from "../modules/Menu";
import { Layout } from "../layout/Layout";
import { Sellshop } from "../modules/SellShop";
import { Contect } from "../modules/Contect";
import { Team } from "../modules/Team";
import { useEffect, useState } from "react";
import { scrollFn } from "../func/jquery-windowscroll_evt";

function temp() {
  let logo = $("#gnb img");
  let menu = $("#menu div");
  let sns = $(".sns-menu a");

  let sts = menu.first().is(".on");
  // console.log(sts);

  if (sts) {
    logo.attr("src", "./images/logo2.png");
    menu.css({ backgroundColor: "#fff" });
    sns.css({ color: "#fff" });
    $("html,body").css({ overflow: "hidden" });
  } else {
    // logo.attr("src", "../images/logo.png");
    // menu.css({ backgroundColor: "#000" });
    // sns.css({ color: "#000" });
    $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+=1px" });
  }
} // temp

export function Gnb() {
  
  // 상태변경 관리변수
  const [pgName, setPgName] = useState("main");

  const chgPgName = (v) => {
    setPgName(v);
    $(".all-menu").fadeOut(300);
    $(".top , .bottom").removeClass("on");
    // console.log(333);
  };

  // 랜더링후 실행
  useEffect(() => {
    $("#menu").click(() => {
      $(".top , .bottom").toggleClass("on");
      $(".all-menu").fadeToggle(400);
    }); // click
    $(window).scroll(() => {
      scrollFn();
    }); // scroll
  }, []); // useEffect

  return (
    <>
      <div id="gnb" className="gnb">
        <a href="/kimnaewoo-react-pj">
          <img className="logo" src="./images/logo2.png" alt="logo" />
        </a>
        <div id="menu" onClick={() => temp()}>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div className="sns-menu">
          <a href="#" className="fa-solid fa-user user" />
          <a href="#" className="fa-brands fa-facebook fk">
            <span>페이스북</span>
          </a>
          <a href="#" className="fa-brands fa-instagram is">
            <span>인스타그램</span>
          </a>
          <a href="#" className="fa-brands fa-youtube yt">
            <span>유튜브</span>
          </a>
        </div>
      </div>
    </>
  );
}
