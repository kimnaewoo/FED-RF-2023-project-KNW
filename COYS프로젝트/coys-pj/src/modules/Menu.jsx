import { Mdata } from "../data/menu";

// css 불러오기
import "../css/menu.css";

export function Menu(props) {
  // 선택데이터
  const Data = Mdata.menu;

  const goPage = (txt) => {
    props.chgPgNameFn(txt);
  };

  return (
    <>
      <div className="all-menu">
        <ul className="header">
          {Data.map((v, i) => (
            <li className="header-nav" key={i}>
              <a href="#" onClick={() => goPage("sellshop")}>
                {v}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
