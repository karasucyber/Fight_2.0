import React from "react";
import * as S from "./style";
import { IonIcon } from '@ionic/react';




export const Beneficios = () => {
  return(
    <> 
         <S.Container> 
         <S.Titulo> Benefícios </S.Titulo>

    <S.ContainerCard>

    <IonIcon name="shield-checkmark-outline"style={{ fontSize: '50px', color:"white" }}></IonIcon>

      <S.Card> 
      <h3>Qualidade garantida</h3>
       <S.span1></S.span1>
       <S.span2></S.span2>
        <S.span3></S.span3>
        <S.span4></S.span4>
        <S.paragrafo>
          Na Homefight, qualidade e garantia são fundamentais em nosso compromisso. Nossa abordagem única se baseia em consistência e planos de treino personalizados para garantir que você atinja seus objetivos de qualidade de vida.
          Mais de 40 alunos já transformaram seus hábitos e melhoraram significativamente sua qualidade de vida conosco, resultado da dedicação, orientação personalizada e consistência que oferecemos.
          Nossos planos de treino são feitos sob medida para suas necessidades, assegurando que você alcance seus objetivos com sucesso. Acreditamos que a qualidade de vida é um investimento valioso, comprometendo-nos a ajudá-lo a alcançá-la de maneira sustentável e duradoura.</S.paragrafo>
         </S.Card>
      <IonIcon name="car-outline"style={{ fontSize: '50px', color:"white" }}></IonIcon>
      <S.Card> 
      <h3> Nós vamos até você</h3>
       <S.span1></S.span1>
       <S.span2></S.span2>
        <S.span3></S.span3>
        <S.span4></S.span4>
        <S.paragrafo>
       Na Homefight, comprometemo-nos a proporcionar uma experiência de treinamento verdadeiramente conveniente, indo até você. Isso economiza tempo e estresse no trânsito, oferecendo flexibilidade em sua rotina diária. Nossos treinadores personalizados adaptam-se ao seu local, tornando o alcance de seus objetivos de saúde mais acessível. Este compromisso com a conveniência visa tornar o treinamento pessoal mais flexível, eficaz e livre de estresse, simplificando sua jornada para um estilo de vida mais saudável e feliz.</S.paragrafo>
     </S.Card>
     <IonIcon name="people-outline" style={{ fontSize: '50px', color:"white" }}></IonIcon>
     <S.Card> 
     <h3> Profissionais Qualificados </h3>
        <S.span1></S.span1>
       <S.span2></S.span2>
        <S.span3></S.span3>
        <S.span4></S.span4>
        <S.paragrafo> Possuímos professores de extrema qualidade em nossa equipe. Todos os nossos instrutores passam por testes rigorosos e treinamentos contínuos para garantir que ofereçam o melhor em termos de qualidade de ensino e segurança. 
Conte conosco para orientação profissional e resultados eficazes!</S.paragrafo>

     </S.Card>

      </S.ContainerCard>
      
   

    </S.Container>
     

   
     
    
    </>

  
  )
}