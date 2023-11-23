// 제이쿼리 불러오기
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 리액트 불러오기
import {createRoot} from "react-dom";
import ReactDOM from "react-dom/client";

// 페이지 공통 CSS
import "./css/common.css";

import { Intro } from "./layout/Intro";
import { Gnb } from "./modules/gnb";
import { TopArea } from "./layout/TopArea";
import { MainArea } from "./layout/MainArea";
import { FooterArea } from "./layout/FooterArea";
import { useEffect } from "react";
import { Menu } from "./modules/Menu";



// 인트로 이벤트 
setTimeout(() => {
  $('.fir').css({top:'60%',opacity:1})
}, 1000);
setTimeout(() => {
  $('.sec').css({top:'73%',opacity:1})
}, 2000);
setTimeout(() => {
  $('.rom img').css({transform:"translate(-40%, -50%)"})
}, 3000);
setTimeout(() => {
  $('.mad img').css({transform:"translate(-36%, -50%)"})
}, 4000);
setTimeout(() => {
  $('.son img').css({transform:"translate(-45%, -50%)"})
}, 5000);
setTimeout(() => {
  $('#intro-area').css({height:"0vh"})
  $('#top-Area').css({display:'block'})
}, 7000);



function App() {
  // 랜더링후 실행 
  useEffect(()=>{
    // GNB이벤트
    $('#menu').mouseover(()=>{
      $('.top , .bottom').addClass('on');
    })
    $('#menu').mouseleave(()=>{
      $('.top , .bottom').removeClass('on')
    })
    $('#menu').click((e)=>{
      $('.all-menu').fadeIn(400);
    })
  })
  return (
    <>
      <Gnb/>
      <Menu/>
      <Intro/>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
