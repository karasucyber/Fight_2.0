import * as S from "./style";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Depoimentos.scss';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export const Depoimentos = () => {
    return(<> 
    <S.Container> 
        <S.Titulo> Depoimentos</S.Titulo>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow,Navigation]}
        className="swiper1"
      >
        <SwiperSlide>
          <img src="depoimento1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="depoimento2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="depoimento3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="depoimento4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="depoimento5.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ }}>
          <img src="depoimento6.jpg" />
        </SwiperSlide>
       

        
      </Swiper>
    
    </S.Container>
    
    </>)
}

export default Depoimentos;