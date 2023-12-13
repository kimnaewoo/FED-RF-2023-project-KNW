// 메인 페이지

import { useEffect } from "react";
import { FooterArea } from "../layout/FooterArea";
import { MainArea } from "../layout/MainArea";
import { TopArea } from "../layout/TopArea";
import { scrollFn } from "../func/jquery-windowscroll_evt";

export function MainPage() {
  useEffect(() => {
    // 자동스크롤 이벤트 설정하기 /////
    window.addEventListener("scroll", scrollFn);
    
    if (window.matchMedia("(max-width:375px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", scrollFn);
      console.log("미디어쿼리~");
    } 
    else{
      window.addEventListener("scroll", scrollFn);
    }
    return () => {
      window.removeEventListener("scroll", scrollFn);
      console.log("난 소멸했어~!");
    }; ////////// 소멸자 return //////
  }, []); /////// useEffect ///////////

  return (
    <>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}
