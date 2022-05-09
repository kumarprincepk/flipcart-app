import React from 'react'
import { Navigation, Pagination, Scrollbar,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCardTwo from './ProductCardTwo';

export default function SwiperMobile() {
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
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
       <SwiperSlide> <ProductCardTwo/></SwiperSlide>
    </Swiper>

    </>
  )
}
