import styled from "styled-components";
 

export const ContainerTex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 400px;
width: 100%;

`
export const ContaineVid = styled.div`
height: 100%;
width: 100%;
padding: 50px;
margin: 0px;
`


export const Titulo =styled.h1`
font-size: 60px;
color:white;
@media only screen and (max-width: 768px) {
    font-size: 40px;
}
`
export const Paragrafo = styled.p`
padding:10px;
color:white;
font-size: 24px;
@media only screen and (max-width: 768px) {
 font-size: 24px;
}
`
export const Butao = styled.button`
background-color: transparent;
color: white;
border: none;
font-size: 16px;
cursor: pointer;
display: flex;
align-items: center;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding: 20px;
margin: 10px;
background-image: url("fundos.jpeg");
background-color: #cccccc;
@media only screen and (max-width: 768px) {
    flex-direction: column; /* Altere a direção da flexbox para empilhar em telas menores */
    height: 100%; 
    width: 100%; 
    padding: 20px; 
}`;
