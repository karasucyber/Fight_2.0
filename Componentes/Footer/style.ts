import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção do fluxo para empilhar verticalmente */
    align-items: center; /* Centraliza os elementos no eixo transversal (vertical) */
  }
`;

export const ContainerBox = styled.div`
background: black;  
padding: 40px;
`;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 10px;
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
    font-size: 14px;
  }
`;

export const Paragrafo = styled.div`
  padding: 5px;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 576px) {
    font-size: 8px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 576px) {
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
