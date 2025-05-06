import React, { useState } from 'react'
import CreditCard from './Cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/CardCarousel.css';

// import required modules
import { Pagination } from "swiper/modules"
import { CardProvider } from '../context/CardContext';
import { UseCardList } from "../context/CardContext";

function CardCarousel() {
  const {cardList, addCard } = UseCardList();
    return (
    <Swiper
      slidesPerView={1}
      spaceBetween={2}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {cardList.map((card, index) => {
        return(
      <SwiperSlide><CreditCard isEven={((index+1) % 2 ===0) ? true : false} balance={card.balance} cardHolder={card.CardHolder} cardNumber={card.cardNumber} expiry={card.expiry}/></SwiperSlide>
        )
      })}
    </Swiper>
  );
}


export default CardCarousel