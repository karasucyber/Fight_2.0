
import React from "react";
import styled from "styled-components";
import keyframes from "styled-components";
import Keyframes from "styled-components/dist/models/Keyframes";



export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
margin: 0 auto;
max-width: 960px; 
background-color:;


@media only screen and (max-width: 768px) {
    padding: 20px; /* Adicione o padding para telas menores, se necessário */
    background-color: #f0f0f0; /* Altere a cor de fundo em telas menores, se necessário */

}`;

export const Card = styled.div `
position: relative;
background: #555 ;
width: 300px;
height: 400px;
`
const animar1 = keyframes.span`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`

export const span1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, transparent, red);
  animation: ${animar1} 2s linear infinite;
`;
export const span2 = styled.div`
position: absolute;
top: 0;
right: 0;
width: 3%;
height: 100%;
background: linear-gradient(to bottom, transparent, red)
`
export const span3 = styled.div`
position: absolute;
bottom: 0;
right: 0;
width: 100%;
height: 3px;
background: linear-gradient(to left, transparent, red)
`
export const span4 = styled.div`
position: absolute;
top: 0;
left: 0;
width: 3px;
height: 100%;
background: linear-gradient(to top, transparent, red)
`