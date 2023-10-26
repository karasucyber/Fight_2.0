import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Pagination,Navigation } from "swiper/modules";
import * as S from "./style";


export const Planos = () => {
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
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow,Navigation]}
        className="swiper1"
      >
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

export default Planos