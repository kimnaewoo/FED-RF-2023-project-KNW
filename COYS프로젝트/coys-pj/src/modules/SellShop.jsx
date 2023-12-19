// 섹션소개모듈 데이터 가져오기
import { sellshopData } from "../data/sellshop";
import { selltopData } from "../data/selltop";
import { sellbanData } from "../data/sellban";
// 섹션소개모듈용 CSS 불러오기
import "../css/sellshop.css";

import { useEffect } from "react";
import { scrollFn } from "../func/jquery-windowscroll_evt";
import { FooterArea } from "../layout/FooterArea";

import $ from "jquery";
import { ShopArea } from "../pages/ShopArea";

export function Sellshop() {
  // 선택데이터
  const selData = sellshopData;
  const selData2 = selltopData;
  const selData3 = sellbanData;

  useEffect(() => {
    // 자동스크롤 이벤트 설정하기 /////
    window.addEventListener("scroll", scrollFn);
    if (window.matchMedia("(max-width:375px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", scrollFn);
      console.log("미디어쿼리~");
    } else {
      window.addEventListener("scroll", scrollFn);
    }

    return () => {
      window.removeEventListener("scroll", scrollFn);
      console.log("난 소멸했어~!");
    }; ////////// 소멸자 return //////

  
  }, []); /////// useEffect ///////////

  return (
    <>
      <div id="sellshop-page">
        <div className="selltop">
          <h1 className="tit">
            <a href="#">SPURS SHOP</a>
          </h1>
          <ul className="sell-gnb">
            {selData2.map((v, i) => (
              <li className="" key={i}>
                <a href="#">{v}</a>
              </li>
            ))}
          </ul>
          <div className="gsbx">
            <a href="#" className="fa-solid fa-magnifying-glass gs"></a>
            <p className="gstit">What are you looking for?</p>
          </div>
          <a href="#" className="fa-solid fa-user us" />
          <a href="#" className="fa-solid fa-cart-shopping cart" />
        </div>
        <ShopArea />
        <p>Home kit</p>
        <div className="sellban">
          {selData3.map((v, i) => (
            <div className="sellbanbx" key={i}>
              <a href="/">
                <img src={v.isrc} alt={v.itit} />
              </a>
              <h4 className="sellbanp">{v.itit}</h4>
            </div>
          ))}
        </div>
        <div className="sellshop">
          {selData.map((v, i) => (
            <div key={i}>
              <div className="sell-imbx">
                <a href="#">
                  <img src={v.isrc} alt={v.tit} />
                </a>
              </div>
              <div className="sell-titbx">
                <a href="#">
                  <h3>{v.tit}</h3>
                  <h2>{v.date}</h2>
                  <h1>{v.price}</h1>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="shop-main"></div>
        <FooterArea />
      </div>
    </>
  );
} ////////////// Sellshop 컴포넌트 ///////////
