'use client'
import React from "react"
import styled from "styled-components";
import * as S from './style';
import Page2 from "../Video/page2";


const Page1 = () => {
  return (
  <>
    <S.Container>
      <S.Titulo>Treine sem sair de casa </S.Titulo>
      <S.Paragrafo>levamos o treino até você</S.Paragrafo>
       <S.Butao> eu quero </S.Butao>
        <Page2></Page2>
    </S.Container>
   </>
  );
}


export default Page1;