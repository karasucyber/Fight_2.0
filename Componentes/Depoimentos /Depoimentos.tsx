import React from "react";
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss';
import { IonIcon } from '@ionic/react';


import { EffectCoverflow,Pagination,Navigation } from "swiper/modules";

import slide_image_1 from "./public/Charles_Chandler.jpg";
import slide_image_2 from "./public/Charles_Chandler.jpg";
import slide_image_3 from "./public/Charles_Chandler.jpg";

export const Depoimentos = () => {
    return(<> 
    <S.Container>
    <div className="container"> 
   <h1 className="heading"> Depoimentos</h1>
   <Swiper effect={'coverflow'}
   grabCursor={true}
   centeredSlides={true}
   loop={true}
   slidesPerView={'auto'}
   coverflowEffect={{rotate:0, stretch: 0, depth:100,modifier: 2.5, }}
   pagination={{el:'',clickable :true}}
   navigation={{
    nextEl:'swiper-button-next slider-arrow',
    prevEl:'swiper-button-prev slider-arrow',
    hideOnClick: true,

   }}
   modules={[EffectCoverflow, Pagination, Navigation]}
   className='swiper_container'
   > 
    <SwiperSlide>
      <h1> </h1>
    <img src="Charles_Chandler.jpg" alt="" />
     </SwiperSlide>
     <SwiperSlide>
    <img src="fundos.jpeg" alt="" />
     </SwiperSlide>
     <SwiperSlide>
    <img src="Charles_Chandler.jpg" alt="" />
     </SwiperSlide>
   
   </Swiper>
  </div>


    </S.Container>
    
    </>)
}

export default Depoimentos;