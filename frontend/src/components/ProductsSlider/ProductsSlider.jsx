import React from "react"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import ProductCard from "../ProductCard/ProductCard"
import { Navigation } from "swiper"
import "swiper/css/navigation";


export default function ProductsSlider() {
  return (
    <div className="mt-8 px-5">
      <div className="text-gray-500 flex justify-start gap-2 mb-2 px-3">
        <h3 className="font-bold text-xl text-orange-500">آخرین محصولات</h3>
        <span>زود بخر تا از دستت نرفتن!</span>
      </div>

      <Swiper
        slidesPerView={5}
        loop
        breakpoints={{
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            840: {
                slidesPerView: 3
            },
            1000: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 5
            },
        }}
        spaceBetween={10}
        className="mySwiper p-0"
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
