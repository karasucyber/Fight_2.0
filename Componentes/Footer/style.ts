import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content:center;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção do fluxo para empilhar verticalmente */
    align-items: center; /* Centraliza os elementos no eixo transversal (vertical) */
  }
`;


export const ContainerBox1 = styled.div`
 background: black;
  display: flex;
  justify-content:center;
  height: 100%;
  width: 100%;
  color: white;
  font-size: 7px;  

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção do fluxo para empilhar verticalmente */
    align-items: center; 
  }
`;

export const ContainerBox = styled.div`
background: black;  
padding: 40px;
`;

export const Column = styled.div`
  flex: 1;
  color: white;
 
  @media (max-width: 768px) {
    font-size: 8px;
    padding: 5px;
  }

  @media (max-width: 576px) {
    font-size: 6px;
    padding: 2px;
  }
`;

export const Titulo = styled.div`
  padding: 5px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: px;
  }
`;

export const Paragrafo = styled.div`
  padding: 5px;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const ContainerTexto = styled.div`
  margin: 2px;

  @media (max-width: 768px) {
    margin: 1px;
  }

  @media (max-width: 576px) {
    margin: 0;
  }
`;

export const ContainerIcons = styled.div`
  display: center;
  padding: 10px;
  font-size: 25px;


  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 576px) {
    font-size: 25px;
    padding: 6px;
    flex-direction: column; /* Altera a direção para coluna */
  }

  & > * {
    margin: 5px; /* Adicione margem entre os ícones */
  }
`;

export const Titulo2 = styled.h2`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Titulo3 = styled.h2`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }

`;

export const Button = styled.a`
  color: red ;
  border-radius: 2px;
  width: 150px;
  height: 100%;
  border: 2px solid transparent; /* Adicione esta linha para as bordas brancas */
  font-siza: 1px;
`


