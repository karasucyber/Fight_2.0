'use client'
import React from "react"
import * as S from './style';
import Page2 from "../Video/page2";
import { IonIcon } from '@ionic/react';
import { Button } from "reactstrap";



const Page1 = () => {
  return (
  <>
    <S.Container>
      <S.ContainerTex>
      <S.Titulo>Treine sem sair de casa </S.Titulo>
      <S.Paragrafo>levamos o treino até você</S.Paragrafo>
      <Button
  style={{
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
  }}
  href="https://www.instagram.com/homefight_/"
  target="_blank"
>
  Eu quero <IonIcon name="caret-forward-outline" />
</Button>
        </S.ContainerTex>
        <Page2></Page2>
    </S.Container>
   </>
  );
}


export default Page1;