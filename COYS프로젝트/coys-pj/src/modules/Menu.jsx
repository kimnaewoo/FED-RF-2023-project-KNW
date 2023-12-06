import { Mdata } from "../data/menu";

// css 불러오기
import "../css/menu.css";

import $ from "jquery"

import { useEffect } from "react";

export function Menu(props) {
  // 선택데이터
  const Data = Mdata.menu;

  useEffect(()=>{
    $('html,body').css({overflowY:"visible"})
  })

  const goPage = (txt) => {
    const pg = {"HOME":"main","TEAM":"team","SPURS SHOP":"sellshop","CONTECT":"contect"}
    props.chgPgNameFn(pg[txt]);
  };

  return (
    <>
      <div className="all-menu">
        <ul className="header">
          {Data.map((v, i) => (
            <li className="header-nav" key={i}>
              <a href="#" onClick={() => goPage(v)}>
                {v}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
