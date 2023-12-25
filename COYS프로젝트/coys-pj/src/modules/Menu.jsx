import { Mdata } from "../data/menu";

import "../css/menu.css";

import $ from "jquery"

import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Menu() {
  // 선택데이터
  const Data = Mdata.menu;

  useEffect(()=>{
    $('html,body').css({overflowY:"visible"})
  })



  return (
    <>
      <div className="all-menu">
        <ul className="header">
          {Data.map((v, i) => (
            <li className="header-nav" key={i}>
              <Link to={v.path}>
                {v.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
