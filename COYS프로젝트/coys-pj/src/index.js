import "jquery-ui-dist/jquery-ui";

// 리액트 불러오기
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 페이지 공통 CSS
import "./css/common.css";

import $ from "jquery";
import { useLayoutEffect } from "react";
import { Layout } from "./layout/Layout";
import { Team } from "./modules/Team";
import { Sellshop } from "./modules/SellShop";
import { Contect } from "./modules/Contect";
import { Main } from "./pages/Main";
function App() {
  useLayoutEffect(() => {
    window.onload = () => {
      window.scrollTo(0, 0);
    };
    
  }); // useLayoutEffect

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="team" element={<Team />} />
          <Route path="shop" element={<Sellshop />} />
          <Route path="contect" element={<Contect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// 출력하기
const root = createRoot(document.querySelector("#root"));
root.render(<App />);
