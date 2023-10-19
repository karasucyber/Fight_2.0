import React from "react";
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Espaço igual entre os cards */
  background-color: black;
  padding: 50px;

  @media only screen and (max-width: 768px) {
    padding: 20px; /* Adicione o padding para telas menores, se necessário */
    background-color: #f0f0f0; /* Altere a cor de fundo em telas menores, se necessário */
  }
`;

export const Card = styled.div `
  position: relative;
  background: #555;
  width: 300px;
  height: 400px;
  overflow: hidden;
  background-image: url("Charles_Chandler.jpg");
`;

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
  background: linear-gradient(to bottom, transparent, red);
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
  background: linear-gradient(to top, transparent, red);
  animation: ${animar4} 2s linear infinite;
  animation-delay: 1s;
`;
