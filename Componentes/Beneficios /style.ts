import styled from "styled-components";

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
background-color: red;

`;

export const Titulo =styled.h1`
font-size: 50px;
color:white;
padding:10px;
gap: 15px;
@media only screen and (max-width: 768px) {
    font-size: 40px;

}`

export const ContainerB = styled.div `
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 10px;
grid-row-gap: 1em;

`

export const ContainerBox = styled.div`
  height: 150px;
  width: 300px;
  background: white;
`