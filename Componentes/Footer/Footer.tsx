import React from "react";
import * as S from "./style";
import { IonIcon } from '@ionic/react';
import { Button } from "reactstrap";

export const Footer = ()=>{
    return(<>
    <S.ContainerBox> 
    <S.Container>
        <S.Column> 
            <S.Titulo> Atendimento </S.Titulo>
            <S.Paragrafo> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) </S.Paragrafo>
        </S.Column>
        <S.Column> 
            <S.Titulo2> Home fight</S.Titulo2>
            <S.Paragrafo> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) </S.Paragrafo>
        </S.Column>
        <S.Column> 
            <h3> Nós siga nas redes socias</h3>
            <S.ContainerIcons><Button href="https://www.instagram.com/homefight_/"><IonIcon name="logo-instagram"></IonIcon></Button> 
             <Button href="https://www.tiktok.com/@homefight_ "><IonIcon name="logo-tiktok"></IonIcon></Button>
             <Button href="https://api.whatsapp.com/send/?phone=5511989188558&text=Ol%C3%A1&type=phone_number&app_absent=0"><IonIcon name="logo-whatsapp"></IonIcon> </Button>
             </S.ContainerIcons>
            <S.ContainerIcons>               
            </S.ContainerIcons>
        </S.Column>
    </S.Container>
    </S.ContainerBox>
    </>)
}