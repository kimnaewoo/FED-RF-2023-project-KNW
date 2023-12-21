import { Mdata } from "../data/menu";

import "../css/menu.css";

import $ from "jquery"

import { useEffect } from "react";
import { Layout } from "../layout/Layout";
import { Sellshop } from "./SellShop";
import { Contect } from "./Contect";
import { Team } from "./Team";

export function Menu(props, pgName) {
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
              {pgName == "main" ? <Layout /> : pgName == "sellshop" ? <Sellshop /> : pgName == "contect" ? <Contect /> : pgName == "team" ? <Team /> : <Layout />}
                {v}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
