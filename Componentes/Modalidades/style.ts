import React from "react";
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding: 20px;
margin: 10px;
background-image: url(""); 
background-color: #666666;
`;

export const Card = styled.div `
border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
  position: relative;
  background: #555;
  width: 240px;
  height: 400px;
  overflow: hidden;
  background-image: url("Funcional.jpeg");
  background-color: #fff;
  color: #000;
  background-size: contain;
  background-repeat: no-repeat; 
    padding: 10px;
  `;


  export const Card2 = styled.div `
border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
  position: relative;
  background: #555;
  width: 240px;
  height: 400px;
  overflow: hidden;
  background-image: url("Boxe.jpeg");
  background-color: #fff;
  color: #000;
  background-size: contain;
  background-repeat: no-repeat; 
    padding: 10px;
  `;

  export const Card3 = styled.div `
  border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
    position: relative;
    background: #555;
    width: 240px;
    height: 400px;
    overflow: hidden;
    background-image: url("MuyThai.jpeg");
    background-color: #fff;
    color: #000;
    background-size: contain;
    background-repeat: no-repeat; 
      padding: 10px;
    `;

    export const Card4 = styled.div `
    border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
      position: relative;
      background: #555;
      width: 240px;
      height: 400px;
      overflow: hidden;
      background-image: url("Yoga.jpeg");
      background-color: #fff;
      color: #000;
      background-size: contain;
      background-repeat: no-repeat; 
        padding: 10px;
      `;
  

export const ContainerCard = styled.div`
display: flex;
gap: 60px;
justify-content: space-between;
@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}`;

const animar1 = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const span1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 7px;
  background: linear-gradient(to right, transparent, red);
  animation: ${animar1} 2s linear infinite;
  animation-delay: 1s;
  &:hover {
  }
`;

const animar2 = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const span2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 4%;
  height: 100%;

  animation-delay: 1s;
`;

const animar3 = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const span3 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(to left, transparent, red);
  animation: ${animar3} 2s linear infinite;
  animation-delay: 1s;
`;
const animar4 = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const span4 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 7px;
  height: 100%;
  animation-delay: 1s;
`;

export const Titulo = styled.h1`
padding: 10px;
margin: 10px;
color:white;
`