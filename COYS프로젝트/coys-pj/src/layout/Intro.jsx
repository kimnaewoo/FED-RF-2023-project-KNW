import "../css/intro.css";


export function Intro() {
  return (
    <>
      <div id="intro-area" className="intro-area">
        <section id="intro-area" className="intro-area">
          <div className="cap-box">
            <div className="intro-captain mad">
              <img src="../images/intro/james.jpg" alt="james" />
            </div>
            <div className="intro-captain son">
              <img src="../images/intro/son.jpg" alt="son" />
            </div>
            <div className="intro-captain rom">
              <img src="../images/intro/romero.png" alt="romero" />
            </div>
          </div>
          <p className="msg fir">#TOTTENHAM HOTSPUR</p>
          <p className="msg sec">#COME ON YOUR SPURS</p>
        </section>
      </div>
    </>
  );
} // Intro 컴포넌트
