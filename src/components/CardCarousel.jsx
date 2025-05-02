import React from 'react'
import CreditCard from './Cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function CardCarousel() {
  // Sample card data

  return (
    <Swiper>
        <SwiperSlide>
            <CreditCard/>
        </SwiperSlide>

        <SwiperSlide>
            <CreditCard/>
        </SwiperSlide>
    </Swiper>
  )
}


export default CardCarousel