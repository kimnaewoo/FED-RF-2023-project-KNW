// 메인 페이지

import { useCallback, useEffect } from "react";
import { FooterArea } from "./FooterArea";
import { scrollFn } from "../func/jquery-windowscroll_evt";
import { Gnb } from "../pages/Gnb";
import { useNavigate } from "react-router-dom";
import { dcCon } from "../modules/dcContext";
import { Main } from "../pages/Main";
export function Layout() {
  useEffect(() => {
    // 자동스크롤 이벤트 설정하기 /////
    window.addEventListener("scroll", scrollFn);

    if (window.matchMedia("(max-width:375px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", scrollFn);
    } else {
      window.addEventListener("scroll", scrollFn);
    }
    return () => {
      window.removeEventListener("scroll", scrollFn);
    }; ////////// 소멸자 return //////
  }, []); /////// useEffect ///////////

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);


  return (
    <dcCon.Provider value={chgPage}>
      <Gnb chgPageFn={chgPage}/>
      <Main />
      <FooterArea />
    </dcCon.Provider>
  );
}
