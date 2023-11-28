// 섹션소개모듈 데이터 가져오기
import { sellshopData } from "../data/sellshop";
import { selltopData } from "../data/selltop";
import { sellbanData } from "../data/sellban";
// 섹션소개모듈용 CSS 불러오기
import "../css/sellshop.css";

export function Sellshop() {
  // 선택데이터
  const selData = sellshopData;
  const selData2 = selltopData;
  const selData3 = sellbanData;

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
        </div>
        <p>Home kit</p>
        <div className="sellban">
          {selData3.map((v, i) => (
            <div className="sellbanbx" key={i}>
              <a href=""><img src={v.isrc} alt={v.itit} /></a>
              <h4 className="sellbanp">{v.itit}</h4>
            </div>
          ))}
        </div>
        <section className="sellshop">
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
        </section>
      </div>
    </>
  );
} ////////////// Sellshop 컴포넌트 ///////////
