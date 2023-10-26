
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
export const Titulo =styled.h1`
font-size: 50px;
color:black;
padding:10px;
gap: 15px;
@media only screen and (max-width: 768px) {
    font-size: 40px;

}`