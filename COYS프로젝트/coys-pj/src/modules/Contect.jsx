import { useEffect } from "react";
import { scrollFn } from "../func/jquery-windowscroll_evt";

export function Contect(){
    useEffect(() => {
        // 자동스크롤 이벤트 설정하기 /////
        window.addEventListener('scroll',scrollFn);
      
        return (() => {
          window.removeEventListener('scroll',scrollFn);
          console.log("난 소멸했어~!");
        }); ////////// 소멸자 return //////
      }, []); /////// useEffect ///////////
    return(
        <></>
    )
}