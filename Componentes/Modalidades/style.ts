import React from "react";
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding: 30px;
background-image: url(""); 
background-color: #666666;

`;

export const Card = styled.div`
border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
  position: relative;
  background: #555;
  width: 220px;
  height: 380px
  overflow: hidden;
  background-image: url("card-funcional.png");
  background-color: #f900;
  color: #000;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);

  
  background-size: contain;
  background-repeat: no-repeat; 
    padding: 0px;
  `;


export const Card2 = styled.div`
border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
  position: relative;
  background: #555;
  width: 220px;
  height: 370px;
  overflow: hidden;
  background-image: url("card-boxe.png");
  background-color: #f900;
  background-size: contain;
  background-repeat: repeat; 
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);

  `;

export const Card3 = styled.div`
  border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
    position: relative;
    background: #555;
    width: 220px;
    height: 370px;
    overflow: hidden;
    background-image: url("card-thai.png");
    background-color: #f900;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
    color: #000;
    background-size: contain;
    background-repeat: no-repeat; 
    `;

export const Card4 = styled.div`
    border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
      position: relative;
      background: #555;
      width: 220px;
      height: 370px;
      overflow: hidden;
      background-image: url("card-yoga.png");
      background-color: #f900;
      color: #000;
      background-size: contain;
      background-repeat: no-repeat; 
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);

      `;

export const Card5 = styled.div`
      border-radius: 10px; /* Defina o raio dos cantos arredondados desejado */
        position: relative;
        background: #555;
        width: 220px;
        height: 370px;  
        overflow: hidden;
        background-image: url("card-personal.png");
        background-color: #f900;
        color: #000;
        background-size: contain;
        background-repeat: no-repeat; 
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);

        `;


export const ContainerCard = styled.div`
display: flex;
gap:20px;
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
  animation: ${animar2} 2s linear infinite;
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
  animation: ${animar3} 2s linear infinite;
  animation-delay: 1s;
`;

export const Titulo =styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 50px;
color:white;
margin: 20px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */
@media only screen and (max-width: 768px) {
    font-size: 40px;
}
`