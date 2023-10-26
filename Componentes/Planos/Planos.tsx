import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Pagination,Navigation } from "swiper/modules";

export const Planos = () => {
  return(<> 

  <div className="container"> 
   <h1 className="heading"> Planos </h1>
   <Swiper effect={'coverflow'}
   grabCursor={true}
   centeredSlides={true}
   loop={true}
   
   slidesPerView={5}
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
    <img src="planos.png" alt="" />
     </SwiperSlide>
     <SwiperSlide>
    <img src="planos.png" alt="" />
     </SwiperSlide>
     <SwiperSlide>
    <img src="planos.png" alt="" />
     </SwiperSlide>
     <SwiperSlide>
    <img src="planos.png" alt="" />
     </SwiperSlide>
     <SwiperSlide>
    <img src="planos.png" alt="" />
     </SwiperSlide>
   </Swiper>
  </div></>)
}

export default Planos