import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "./assets/Images/book1.jpg";
import slide_image_2 from "./assets/Images/book2.jpg";
import slide_image_3 from "./assets/Images/book3.jpg";
import slide_image_4 from "./assets/Images/book4.jpg";
import slide_image_5 from "./assets/Images/book5.jpg";
import slide_image_6 from "./assets/Images/book6.jpg";

function Carousel() {
  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
  ]; 

  return (
    <div className="container">
      <h1 className="header">Novedades</h1>

      {/* Swiper Carousel */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        loop={true} 
        centeredSlides={true} 
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: 'swiper-pagination', clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src= {slide_image_1} alt="Book 1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src= {slide_image_2} alt="Book 2"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src= {slide_image_3} alt="Book 3"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src= {slide_image_4} alt="Book 4"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src= {slide_image_5} alt="Book 5"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src= {slide_image_6} alt="Book 6"></img>
        </SwiperSlide>

        <div className="slider-controller">
      <div className="swiper-button-prev slider-arrow">
  <ion-icon name='arrow-back-outline'></ion-icon>
</div>
<div className="swiper-button-next slider-arrow">
  <ion-icon name='arrow-forward-outline'></ion-icon>
</div>
      <div className="swiper-pagination"></div>
      </div>
      </Swiper>
    </div>
  );
}

export default Carousel;