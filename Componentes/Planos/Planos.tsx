import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import * as S from "./style";


export const Planos = () => {
  return (<>
    <S.Container>
      <S.Titulo> Planos</S.Titulo>
      <div style={{ 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '650px', // Set the maximum width
  maxHeight: '600px' // Set the maximum height
}}>      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Navigation]}
        className="swiper1"
      >
        <SwiperSlide>
          <img src="planos.png" style={{
            width: '35rem',
            height: '48rem',
            borderRadius: '1rem',
            objectFit: 'contain'
          }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="planos.png" style={{
            width: '35rem',
            height: '48rem',
            borderRadius: '1rem',
            objectFit: 'contain'
          }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="planos.png" style={{
            width: '35rem',
            height: '48rem',
            borderRadius: '1rem',
            objectFit: 'contain'
          }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="planos.png" style={{
            width: '35rem',
            height: '48rem',
            borderRadius: '1rem',
            objectFit: 'contain'
          }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="planos.png" style={{
            width: '35rem',
            height: '48rem',
            borderRadius: '1rem',
            objectFit: 'contain'
          }} />
        </SwiperSlide>
      </Swiper>
      </div>

    </S.Container>










  </>)
}

export default Planos