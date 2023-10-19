'use client'

import React from "react"
import * as S from './style';
import Page1 from "@/Componentes/BemViindo /Page1";
import { Modalidades } from "@/Componentes/Modalidades/Modalidades";
import Carousel3D from "@/Componentes/Planos/Planos";

export default function Home() {
  return (
 <>

 <S.ContainerMain>  
  
  <Page1></Page1>
  <Modalidades></Modalidades>
  <Carousel3D></Carousel3D>
   
 </S.ContainerMain>

 

 </>    
 
  )
}
