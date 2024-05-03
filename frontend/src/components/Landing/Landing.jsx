import React, { Component } from "react"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="w-full h-60 md:h-72 xl:h-96 overflow-hidden select-none">
            <Swiper autoplay navigation pagination modules={[Pagination, Navigation]} className="mySwiper w-full h-full">
                <SwiperSlide className="overflow-hidden">
                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/ecbe938657ad9e4a74d55aa47e0543e20e428bb7_1682423996.jpg?x-oss-process=image/quality,q_95/format,webp" alt="Shop Slider" className="h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/cdaff897322b3339757092320714b6c85f954d77_1682426277.jpg?x-oss-process=image/quality,q_95/format,webp" alt="Shop Slider" className="h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/2c67360b34e4456a253b402d8f9ca834b6679920_1682240992.jpg?x-oss-process=image/quality,q_95/format,webp" alt="Shop Slider" className="h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bbc50ec24cadcb4b79711831273aeea4bc80d9c4_1682335137.jpg?x-oss-process=image/quality,q_95/format,webp" alt="Shop Slider" className="h-full object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
      )
  }
}