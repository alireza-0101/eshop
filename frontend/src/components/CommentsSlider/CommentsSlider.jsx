import React from "react"
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation } from "swiper"
import "swiper/css/navigation"
import CommentBox from "./commentBox"

export default function CommentsSlider() {
  return (
    <div className="py-3 px-8 mt-5 w-full">
      <Swiper
        slidesPerView={5}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          840: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        className="mySwiper p-0"
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <CommentBox />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
