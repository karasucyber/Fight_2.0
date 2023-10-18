'use client'

import React from "react"
import * as S from './style';
import Page1 from "@/Componentes/BemViindo /Page1";
import Page2 from "@/Componentes/Beneficios/page2";
import { Modalidades } from "@/Componentes/Modalidades/Modalidades";


export default function Home() {
  return (
 <>

 <S.ContainerMain>  
  
  <Page1></Page1>
  <Modalidades></Modalidades>
  
 </S.ContainerMain>

 

 </>    
 
  )
}
