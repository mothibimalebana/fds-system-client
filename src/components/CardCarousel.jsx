import React, { useState } from 'react'
import CreditCard from './Cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CardCarousel.css';

// import required modules
import { Pagination } from "swiper/modules"

function CardCarousel() {
    return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><CreditCard cardHolder='Thabisile Moloi'/></SwiperSlide>
        <SwiperSlide><CreditCard cardHolder='Thabelo Budeli'/></SwiperSlide>
      </Swiper>
    </>
  );
}


export default CardCarousel