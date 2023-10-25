'use client'

import React from "react"
import * as S from './style';
import Page1 from "@/Componentes/BemViindo /Page1";
import { Modalidades } from "@/Componentes/Modalidades/Modalidades";
import Planos from "@/Componentes/Planos/Planos";
import { Footer } from "@/Componentes/Footer/Footer";
import Depoimentos from "@/Componentes/Depoimentos /Depoimentos";
import { Beneficios } from "@/Componentes/Beneficios /Beneficions";

export default function Home() {
  return (
 <>

 <S.ContainerMain>  
  <Page1/>
  <Modalidades/>
  <Depoimentos/>
  <Beneficios/>
  <Planos></Planos>
  <Footer/>
 </S.ContainerMain>

 

 </>    
 
  )
}
