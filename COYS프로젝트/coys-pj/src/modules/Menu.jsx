import { Mdata } from "../data/menu";

// css 불러오기
import "../css/menu.css";

export function Menu() {
  // 선택데이터
  const Data = Mdata.menu;
  return (
    <>
      <div className="all-menu">
        <ul className="header">
          {Data.map((v,i) => (
            <li className="header-nav" key={i}>{v}</li>
          ))}
          
        </ul>
      </div>
    </>
  );
}
