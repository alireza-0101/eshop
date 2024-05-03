import React, { useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"

export default function ProductImagesGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        zoom
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 bg-red-300 w-full mb-3"
      >
        <SwiperSlide className="overflow-hidden w-full flex justify-center items-center">
          <img
            className="w-full hover:scale-150 transition-all duration-300"
            src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          />
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden w-full flex justify-center items-center">
          <img
            className="w-full hover:scale-150 transition-all duration-300"
            src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          />
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden w-full flex justify-center items-center">
          <img
            className="w-full hover:scale-150 transition-all duration-300"
            src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          />
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden w-full flex justify-center items-center">
          <img
            className="w-full hover:scale-150 transition-all duration-300"
            src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          />
        </SwiperSlide>

        <SwiperSlide className="overflow-hidden w-full flex justify-center items-center">
          <img
            className="w-full hover:scale-150 transition-all duration-300"
            src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="hover:opacity-80 cursor-pointer rounded-sm overflow-hidden bg-gray-50 dark:bg-gray-800">
          <img src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp" />
        </SwiperSlide>

        <SwiperSlide className="hover:opacity-80 cursor-pointer rounded-sm overflow-hidden bg-gray-50 dark:bg-gray-800">
          <img src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp" />
        </SwiperSlide>

        <SwiperSlide className="hover:opacity-80 cursor-pointer rounded-sm overflow-hidden bg-gray-50 dark:bg-gray-800">
          <img src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp" />
        </SwiperSlide>

        <SwiperSlide className="hover:opacity-80 cursor-pointer rounded-sm overflow-hidden bg-gray-50 dark:bg-gray-800">
          <img src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp" />
        </SwiperSlide>

        <SwiperSlide className="hover:opacity-80 cursor-pointer rounded-sm overflow-hidden bg-gray-50 dark:bg-gray-800">
          <img src="https://arshawebdesign.com/machic/wp-content/uploads/2021/09/silver4-400x400.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
