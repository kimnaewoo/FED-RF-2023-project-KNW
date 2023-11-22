import { MatchArea } from "../pages/MatchArea";
import { NewsArea } from "../pages/NewsArea";
import { ShopArea } from "../pages/ShopArea";

// 라우터 역할을 하는 MainArea 컴포넌트
export function MainArea() {
  return (
    <>
      <ShopArea />
      <MatchArea />
      <NewsArea/>
    </>
  );
} // MainArea 컴포넌트
