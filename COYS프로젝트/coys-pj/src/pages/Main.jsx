import { HomeArea } from "./HomeArea";
import { MatchArea } from "./MatchArea";
import { NewsArea } from "./NewsArea";
import { ShopArea } from "./ShopArea";
import { Intro } from "../layout/Intro";
import { TopArea } from "../layout/TopArea";

// 라우터 역할을 하는 MainArea 컴포넌트
export function Main() {
  return (
    <>
      <Intro />
      <TopArea/>
      <ShopArea />
      <MatchArea />
      <NewsArea />
      <HomeArea />
    </>
  );
} // MainArea 컴포넌트
