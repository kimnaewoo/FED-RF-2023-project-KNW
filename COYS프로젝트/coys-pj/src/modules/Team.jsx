import { useEffect } from "react";
import { FooterArea } from "../layout/FooterArea";

import "../css/team.css";
import { scrollFn } from "../func/jquery-windowscroll_evt";
import { teamscrollFn } from "../func/team_scroll";
import { teamData } from "../data/team";

export function Team() {
  useEffect(() => {
    // 자동스크롤 이벤트 설정하기 /////
    window.addEventListener("scroll", teamscrollFn);

    return () => {
      window.removeEventListener("scroll", scrollFn);
      console.log("난 소멸했어~!");
    }; ////////// 소멸자 return //////
  }, []); /////// useEffect ///////////
  return (
    <>
      <div className="team-area">
        <div className="team-top"></div>
        <h1 className="team-tit">TEAMS</h1>
        <div className="teambx">
          <div className="team">
            {teamData.map((v, i) => (
              <div className="pro" key={i}>
                <div className="pro-img">
                  <img src={v.isrc} alt={v.tit} />
                </div>
                <div className="pro-data">
                  <p className="pro-tit">{v.tit}</p>
                  <p className="pro-from">{v.from}</p>
                </div>
                <div className="pro-num">{v.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterArea />
    </>
  );
}
