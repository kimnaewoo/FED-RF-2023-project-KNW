// 제이쿼리 불러오기
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 리액트 불러오기
import {createRoot} from "react-dom";

// 페이지 공통 CSS
import "./css/common.css";

import { TopArea } from "./layout/TopArea";
import { MainArea } from "./layout/MainArea";
import { FooterArea } from "./layout/FooterArea";
import { Intro } from "./layout/Intro";
import { Gnb } from "./modules/gnb";

function App() {
  return (
    <>
      <Gnb/>
      <Intro/>
      <TopArea />
      <MainArea />
      <FooterArea />
    </>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
