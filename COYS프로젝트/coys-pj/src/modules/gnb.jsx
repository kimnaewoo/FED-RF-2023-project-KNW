import "../css/gnb.css";

export function Gnb() {
  return (
    <>
      <div id="gnb" className="gnb">
        <a href="tottenham.html">
          <img src="../images/logo2.png" alt="logo" />
        </a>
        <div id="menu">
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
