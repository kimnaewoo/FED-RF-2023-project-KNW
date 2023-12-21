// 제이쿼리 불러오기
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 리액트 불러오기
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

// 페이지 공통 CSS
import "./css/common.css";

import { useEffect, useLayoutEffect, useState } from "react";
import { Layout, MainPage } from "./layout/Layout";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Sellshop } from "./modules/SellShop";
import { Gnb } from "./pages/Gnb";
import { Menu } from "./modules/Menu";
import { Contect } from "./modules/Contect";
import { Team } from "./modules/Team";
import { HomeArea } from "./pages/HomeArea";

function App() {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }); // useLayoutEffect

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
