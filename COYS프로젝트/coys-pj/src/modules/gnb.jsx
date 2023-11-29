import "../css/gnb.css";

import $ from "jquery";

function temp(){
  
  let logo = $("#gnb img");
  let menu = $("#menu div");
  let sns = $(".sns-menu a");

  let sts = menu.first().is('.on');
  console.log(sts);

  if(sts){
    logo.attr("src", "../images/logo2.png");
    menu.css({ backgroundColor: "#fff" });
    sns.css({ color: "#fff" });
    $('html,body').css({overflow:"hidden"})

  }
  else{
    
    // logo.attr("src", "../images/logo.png");
    // menu.css({ backgroundColor: "#000" });
    // sns.css({ color: "#000" });
    $('html,body').css({overflowY:"visible"})
    .animate({scrollTop:"+=1px"});

  }
  
}
export function Gnb() {
  return (
    <>
      <div id="gnb" className="gnb">
        <a href="tottenham.html">
          <img className="logo" src="../images/logo2.png" alt="logo" />
        </a>
        <div id="menu" onClick={temp}>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div className="sns-menu">
          <a href="sub1.html" className="fa-brands fa-facebook fk">
            <span>페이스북</span>
          </a>
          <a href="sub1.html" className="fa-brands fa-instagram is">
            <span>인스타그램</span>
          </a>
          <a href="sub1.html" className="fa-brands fa-youtube yt">
            <span>유튜브</span>
          </a>
        </div>
      </div>
    </>
  );
}
