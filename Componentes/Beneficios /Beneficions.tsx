import React from "react";
import * as S from "./style";
import { IonIcon } from '@ionic/react';




export const Beneficios = () => {
  return(
    <> 
         <S.Container> 
         <S.Titulo> Beneficios </S.Titulo>

    <S.ContainerCard>

    <IonIcon name="shield-checkmark-outline"style={{ fontSize: '50px', color:"white" }}></IonIcon>

      <S.Card> 
      <h3> qualidade garantida</h3>

       <S.span1></S.span1>
       <S.span2></S.span2>
        <S.span3></S.span3>
        <S.span4></S.span4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
     </S.Card>
     <IonIcon name="star-outline" style={{ fontSize: '50px', color:"white" }}></IonIcon>

     <S.Card> 
     <h3> Pessoas qualifcadas</h3>
       <S.span1></S.span1>
       <S.span2></S.span2>
        <S.span3></S.span3>
        <S.span4></S.span4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

     </S.Card>

      </S.ContainerCard>

      <S.ContainerCard>
       
      <IonIcon name="car-outline"style={{ fontSize: '50px', color:"white" }}></IonIcon>

      <S.Card> 
      <h3> nós vamos até você</h3>

       <S.span1></S.span1>
       <S.span2></S.span2>
        <S.span3></S.span3>
        <S.span4></S.span4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

     </S.Card>
     <IonIcon name="people-outline" style={{ fontSize: '50px', color:"white" }}></IonIcon>

     <S.Card> 
     <h3> Pessoas qualifcadas </h3>
        <S.span1></S.span1>
       <S.span2></S.span2>
        <S.span3></S.span3>
        <S.span4></S.span4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

     </S.Card>

      </S.ContainerCard>
      
   

    </S.Container>
     

   
     
    
    </>

  
  )
}