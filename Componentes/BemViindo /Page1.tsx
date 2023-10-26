'use client'
import React from "react"
import * as S from './style';
import Page2 from "../Video/page2";
import { IonIcon } from '@ionic/react';



const Page1 = () => {
  return (
  <>
    <S.Container>
      <S.ContainerTex>
      <S.Titulo>Treine sem sair de casa </S.Titulo>
      <S.Paragrafo>levamos o treino até você</S.Paragrafo>
       <S.Butao>  Eu quero <IonIcon name="caret-forward-outline"></IonIcon></S.Butao>
       

        </S.ContainerTex>
    </S.Container>
   </>
  );
}


export default Page1;