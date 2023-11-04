
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

`;

export const Titulo =styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 50px;
color:black;
padding:10px;
gap: 15px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */
@media only screen and (max-width: 768px) {
    font-size: 40px;
}
`