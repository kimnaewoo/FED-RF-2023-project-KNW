// 메인 페이지

import { useCallback, useEffect } from "react";
import { FooterArea } from "./FooterArea";
import { Gnb } from "../pages/Gnb";
import { useNavigate } from "react-router-dom";
import { dcCon } from "../modules/dcContext";
import { MainArea } from "./MainArea";
export function Layout() {
 

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

  return (
    <dcCon.Provider value={chgPage}>
      <Gnb chgPageFn={chgPage} />
      <MainArea />
      <FooterArea />
    </dcCon.Provider>
  );
}
