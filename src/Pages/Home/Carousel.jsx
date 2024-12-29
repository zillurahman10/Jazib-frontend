import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{marginTop:"100px", marginBottom:"100px", paddingBottom:"100px"}}
      >
        <SwiperSlide style={{height: '500px'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{height: '500px'}}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
