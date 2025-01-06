import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Pagination } from "swiper/modules";

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
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          paddingBottom: "100px",
        }}
      >
        <SwiperSlide >
          <Card
            shadow={false}
            className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co.com/dBwQtQQ/photo1.jpg')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h5"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                How we design and code open-source projects?
              </Typography>
              <button className="custom-btn">See details</button>
            </CardBody>
          </Card>
        </SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 5</SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 6</SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 7</SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 8</SwiperSlide>
        <SwiperSlide style={{ height: "500px" }}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
