import React from "react"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function BrandsSlider() {
  return (
    <div className="mt-8 px-5">
      <div className="text-gray-500 flex justify-start gap-2 mb-4 px-3">
        <h3 className="font-bold text-xl text-green-500">برند های معتبر</h3>
        <span>این برند هارو نخری باختی!</span>
      </div>

      <Swiper
        slidesPerView={6}
        loop
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          840: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        className="mySwiper p-0"
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src="https://www.technolife.ir/image/banner_BrandBanners_cGg6wY_066876e8-8b4b-4a9f-adee-eec20227bb08.webp"
            alt="Shop Brands"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
