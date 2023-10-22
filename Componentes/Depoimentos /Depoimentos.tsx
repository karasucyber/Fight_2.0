import * as S from "./style";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Depoimentos.scss';

// import required modules
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="Captura de tela_2023-10-22_10-45-20.jpg" />
        </SwiperSlide>

        
      </Swiper>
    
    </S.Container>
    
    </>)
}

export default Depoimentos;