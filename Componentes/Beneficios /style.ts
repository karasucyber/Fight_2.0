import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
display: flex-block;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding: 20px;
margin: 10px;
background-color: red;
`;

export const Card = styled.div `
border-radius: 10px; 
  position: relative;
  width: 350px;
  height: 100%;
  overflow: hidden;
  color: white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
  background-size: cover;
  overflow: hidden; 
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height:auto;
   
   }
  `;


  export const paragrafo = styled.p`
  text-shadow: -4px 0 20px rgba(0, 0, 0, 0);

   
  `

export const ContainerCard = styled.div`
display: flex;
gap: 60px;
padding: 50px;
justify-content: space-between;
@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  gap: 30px;

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

export const Titulo =styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 50px;
color:white;
padding:10px;
gap: 15px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */
@media only screen and (max-width: 768px) {
    font-size: 40px;
}
`
export const ContainerIcon1 = styled.div`
width: 7px;
height: 100%;

`

export const ContainerIcons = styled.div`
width: 100px;
height: 100px;


`