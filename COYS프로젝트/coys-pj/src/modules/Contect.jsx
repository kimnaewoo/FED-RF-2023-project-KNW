import { useEffect } from "react";
import { scrollFn } from "../func/jquery-windowscroll_evt";

import "../css/contect.css";
import { FooterArea } from "../layout/FooterArea";

export function Contect() {
  useEffect(() => {
    // 자동스크롤 이벤트 설정하기 /////
    // window.addEventListener("scroll", scrollFn);

    // return () => {
    //   window.removeEventListener("scroll", scrollFn);
    //   console.log("난 소멸했어~!");
    // }; ////////// 소멸자 return //////
  }, []); /////// useEffect ///////////
  return (
    <div id="ct-area" className="ct-area">
      <div className="ct-top">
        <h2>THE</h2>
        <h3>STADIUM</h3>
      </div>
      <h1 className="ct-tit">WELCOME TO TOTTENHAM HOTSUP STADIUM</h1>
      <div className="ct-intro">
        <div className="intro-img"><img src="../images/contect/stadium02.jpg" alt="" /></div>
        <div className="intro-ex">
          <h3>The Stadium</h3>
          <br />
          <h4>
            The home of Tottenham Hotspur Football Club and the largest club stadium in London with a capacity of
            62,850.
            <br /><br />
            Opened in April, 2019, the stadium is designed to maximise the supporter experience and brings fans closer
            to the pitch than at any comparable size stadium in the UK - distances from the front row to the touchline
            range from just 4.9 metres to 7.9 metres.
            <br /><br />
            Our 17,500-seat, single-tier South Stand is the largest in the UK and stands at more than 34 metres in
            height - on top of which sits the Club's famous golden cockerel.
            <br /><br />
            Over 60 food and drink outlets across the stadium are inspired by London's vibrant street food scene,
            offering supporters a wide range of choice, including plant-based options throughout. Highlights include The
            Market Place in the South Stand, featuring Europe's longest bar - The Goal Line.
            <br /><br />
            The stadium is multi-use with a unique, dividing retractable grass surface enabling the staging of a variety
            of major events in addition to Spurs matches, including NFL, boxing, rugby and concerts - creating recurring
            sources of revenue for the Club to reinvest in its football activities.
            <br /><br />
            With the addition of Visitor Attractions, including Stadium Tours and The Dare Skywalk, and world-class
            Conference & Events facilities, Tottenham Hotspur Stadium brings nearly two million visitors to N17 every
            year and a £344m annual boost to the local economy in one of London's most deprived areas.
            <br /><br />
            Tottenham Hotspur is Premier League's greenest club and the stadium is powered by 100% renewable energy,
            with a zero waste-to-landfill policy, a reusable beer cup scheme and a wide range of public transport
            options.
          </h4>
          <button className="exbtn">VIEW UPCOMING EVENTS</button>
        </div>
      </div>
      {/* <FooterArea/> */}
    </div>
  );
}
