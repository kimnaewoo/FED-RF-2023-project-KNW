// 섹션소개모듈 데이터 가져오기
import { sellshopData } from "../data/sellshop";
import { selltopData } from "../data/selltop";
// 섹션소개모듈용 CSS 불러오기
import "../css/sellshop.css";



export function Sellshop() {
  // 선택데이터
  const selData = sellshopData;
  const selData2 = selltopData;

  return (
    <>
    <div className="sellshop-page">
        <div className="selltop">
            {selData2.map((v)=>
            <ul>
                <li>{v}</li>
            </ul>)}
        </div>

      <section className="sellshop">
        {selData.map((v, i) => (
          <div key={i}>
            <div className="sell-imbx">
              <img src={v.isrc} alt={v.tit} />
            </div>
            <div className="sell-titbx">
              <h3>{v.tit}</h3>
              <h2>{v.date}</h2>
              <h1>{v.price}</h1>
            </div>
          </div>
        ))}
      </section>
    </div>
    </>
  );
} ////////////// Sellshop 컴포넌트 ///////////
