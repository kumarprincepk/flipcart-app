import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useEffect, useState} from 'react'
import ProductApiSwiper from './ProductApiSwiper';
  


export default function ProductApiOne() {
  const [data,setData] = useState([])
  const url = 'https://fakestoreapi.com/products'
  useEffect(()=>{
    fetch(url)
    .then(response => response.json()).then(json => {
      console.log('jsonnn',json)
      setData(json)
    }).catch(e=>{
      console.log("e",e)
    })
  },[])
  return (
    <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {
      data.map((item)=>{
        return <SwiperSlide><ProductApiSwiper item={item}/></SwiperSlide>
      })
    }
    </Swiper>
  );
};