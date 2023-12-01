// 스와이퍼 플러그인 컴포넌트

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!

export function SwiperApp() {
  
  // 리스트 만들기 함수
  const makeList = (num) => {
    let temp = [];
    for (let x = 0; x < num; x++) {
      temp[x] = (
        <SwiperSlide className="kitbox" key={x}>
          <div className="kit">
            <img src={"./images/shop/hk" + (x + 1) + ".jpg"} />
            <p>　COYS</p>
          </div>
        </SwiperSlide>
      );
    } // for문
    return temp;
  };
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-200}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        id="kitbox"
      >
        {makeList(11)}
      </Swiper>
    </>
  );
} // Swiper 컴포넌트
