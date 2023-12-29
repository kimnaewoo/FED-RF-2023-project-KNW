import "../css/gnb.css";

import $ from "jquery";
import { memo, useEffect } from "react";
import { Menu } from "../modules/Menu";
import { Link } from "react-router-dom";

function temp() {
  let logo = $("#gnb img");
  let menu = $("#menu div");
  let user = $(".user");
  let sns = $(".sns-menu a");

  let sts = $(".top").is(".on");

  if (sts) {
    logo.attr("src", "./images/logo2.png");
    menu.css({ backgroundColor: "#fff" });
    user.css({ color: "#fff" });
    sns.css({ color: "#fff" });
    $("html,body").css({ overflow: "hidden" });
  } else {
    $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+1px" }).animate({ scrollTop: "-1px" });
  }
} // temp

export const Gnb = memo(({ logSts, logOut }) => {
  // 랜더링후 실행
  useEffect(() => {
    $("#menu").click(() => {
      $(".top , .bottom").toggleClass("on");
      $(".all-menu").fadeToggle(400);
    }); // click
  }, []); // useEffect

  return (
    <>
      <Menu />
      <div id="gnb" className="gnb">
        <Link to="">
          <img className="logo" src="./images/logo2.png" alt="logo" />
        </Link>
        <div id="menu" onClick={() => temp()}>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        {logSts === null && (
          <>
            <Link to="login" className="fa-solid fa-user user"></Link>
          </>
        )}
        {logSts !== null && (
          <>
            <h1 className="fa-solid fa-user-slash user logout" onClick={logOut}></h1>
          </>
        )}
        

        <div className="sns-menu">
          <a href="/" className="fa-brands fa-facebook fk">
            <span>페이스북</span>
          </a>
          <a href="/" className="fa-brands fa-instagram is">
            <span>인스타그램</span>
          </a>
          <a href="/" className="fa-brands fa-youtube yt">
            <span>유튜브</span>
          </a>
        </div>
      </div>
    </>
  );
});
