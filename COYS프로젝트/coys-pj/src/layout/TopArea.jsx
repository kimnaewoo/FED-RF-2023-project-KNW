import "../css/top_area.css";
import { Menu } from "../modules/Menu";
import { Gnb } from "../pages/Gnb";
import { Intro } from "./Intro";
export function TopArea() {
  return (
    <>
    <Gnb/>
      <section id="top-area" className="top-area">
        <video muted autoPlay loop>
          <source src="./videos/main_video.mp4" type="video/mp4" />
        </video>
        <h1>WE ARE INEVITABLE</h1>
        <h2>CREATIVES IN FOOTBALL</h2>
        <h4>" Glory, Glory, Tottenham Hotspur "</h4>
        <div className="wheel">
          <img src="./images/wheel.png" alt="마우스휠" />
        </div>
      </section>
    </>
  );
}
