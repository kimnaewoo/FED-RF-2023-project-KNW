// 메인 페이지

import { useCallback, useEffect } from "react";
import { FooterArea } from "./FooterArea";
import { MainArea } from "../pages/Main";
import { TopArea } from "./TopArea";
import { scrollFn } from "../func/jquery-windowscroll_evt";
import { Gnb } from "../pages/Gnb";
import { Menu } from "../modules/Menu";
import { useNavigate } from "react-router-dom";
import { dcCon } from "../modules/dcContext";
import { Provider } from "react";
import { Main } from "../pages/Main";
export function Layout() {
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

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);


  return (
    <dcCon.Provider >
      <TopArea />
      <Main />
      <FooterArea />
    </dcCon.Provider>
  );
}
