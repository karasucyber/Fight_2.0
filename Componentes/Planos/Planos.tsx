import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  perspective: 1200px;
  perspective-origin: center;
`;

const rotate = keyframes`
  0%, 100% {
    transform: rotateY(0deg);
  }
  20%, 80% {
    transform: rotateY(120deg);
  }
  /* Adicione keyframes para mais slides conforme necessário */
`;

const Carousel = styled.div`
  width: 300px; /* Largura de cada slide */
  transform-style: preserve-3d;
  animation: ${rotate} 12s infinite linear;
`;



const CarouselItem = styled.div`
  width: 100%;
  height: 200px; /* Altura dos slides */
  position: absolute;
  transform-origin: center;
  transition: transform 1s;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Carousel3D() {
  return (
    <Container>
      <Carousel>
        <CarouselItem><SlideImage src="" alt="Image 1" /></CarouselItem>
        <CarouselItem><SlideImage src="image2.jpg" alt="Image 2" /></CarouselItem>
        <CarouselItem><SlideImage src="image3.jpg" alt="Image 3" /></CarouselItem>
        {/* Adicione mais itens conforme necessário */}
      </Carousel>
    </Container>
  );
}

export default Carousel3D;
