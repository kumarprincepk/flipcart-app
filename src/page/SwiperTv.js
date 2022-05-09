import React from 'react';
import { Navigation, Pagination, Scrollbar,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from "../page/ProductCard";

export default function SwiperTv() {
  return (
   <>
 <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >   
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
      <SwiperSlide><ProductCard/></SwiperSlide>
     
    
      </Swiper>
   </>
  )
}
