import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import * as S from "./style";

export const Planos = () => {
  const planosData = [
    { imgSrc: "plano-anual.png", href: "https://api.whatsapp.com/send/?phone=5511989188558&text=Ol%C3%A1&type=phone_number&app_absent=0" },
    { imgSrc: "plano-mensasl.png", href: "https://api.whatsapp.com/send/?phone=5511989188558&text=Ol%C3%A1&type=phone_number&app_absent=0" },
    { imgSrc: "plano-semestral.png", href: "https://api.whatsapp.com/send/?phone=5511989188558&text=Ol%C3%A1&type=phone_number&app_absent=0" },
    { imgSrc: "plano-trimestral.png", href: "https://api.whatsapp.com/send/?phone=5511989188558&text=Ol%C3%A1&type=phone_number&app_absent=0" },
  ];

  return (
    <>
      <S.Container>
        <S.Titulo>Planos</S.Titulo>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '650px', // Defina a largura máxima
            maxHeight: '600px' // Defina a altura máxima
          }}
        >
          <Swiper
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
            {planosData.map((plano, index) => (
              <SwiperSlide key={index}>
                <a href={plano.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={plano.imgSrc}
                    style={{
                      width: '35rem',
                      height: '48rem',
                      borderRadius: '1rem',
                      objectFit: 'contain',
                    }}
                    alt={`Plano ${index + 1}`}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </S.Container>
    </>
  );
}

export default Planos;
