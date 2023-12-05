'use client'
import React from "react"
import * as S from './style';
import Page2 from "../Video/page2";
import { IonIcon } from '@ionic/react';
import { Button } from "reactstrap";
import styled from "styled-components";
import Link from "next/link";

// Importações necessárias
const StyledLinkButton = styled(Button)`
  background-color: #ffff;
  color: black;
  font-size: px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none; /* Remover sublinhado padrão */
  &:hover {
    background-color: black;
    color: white;
  }
`;


const link:String = "https://www.youtube.com/watch?v=KYwA5k00p2I&list=RDkQ2ZFVJNMs0&index=6";
const Page1 = () => {
  return (
    <>
      <S.Container>
        <S.ContainerTex>
          <S.Titulo>TREINE SEM SAIR DE CASA!</S.Titulo>
          <S.Paragrafo>Nós levamos o treino até você.</S.Paragrafo>
          <StyledLinkButton href={Link}> Eu quero  <IonIcon name="caret-forward-outline" /></StyledLinkButton>
        </S.ContainerTex>
        <Page2 />
      </S.Container>
    </>
  );
}

export default Page1;
