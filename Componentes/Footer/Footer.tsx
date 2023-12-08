import React from "react";
import * as S from "./style";
import { IonIcon } from '@ionic/react';
import { Button } from "reactstrap";
import styled from "styled-components";

const commonButtonStyles = `
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const WhatsappButton = styled.a`
  ${commonButtonStyles}
`;

const TikTokButton = styled(Button)`
  ${commonButtonStyles}
  background: none;
  transition: background 0.3s ease-in-out;
`;

const InstagramButton = styled(Button)`
  ${commonButtonStyles}
`;



export const Footer = ()=>{
    return(<>
    <S.ContainerBox> 
    <S.Container>
        <S.Column> 
            <S.Titulo2> Atendimento </S.Titulo2>
            <S.Paragrafo> Estamos sempre à disposição para esclarecer dúvidas sobre nossos serviços, agendar sessões de treinamento e discutir suas metas e objetivos! Entre em contato conosco via Whatsapp e venha cuidar da sua saúde! </S.Paragrafo>
        </S.Column>
        <S.Column> 
            <S.Titulo2> Home fight</S.Titulo2>
            <S.Paragrafo> 
            A Home Fight iniciou sua história em um momento desafiador em todo o mundo: a pandemia. Nossa empresa cresceu com o propósito de proporcionar saúde física e mental a todos os nossos alunos. Desde então, crescemos e evoluímos, mantendo-nos fiéis ao nosso objetivo de tornar a vida de nossos alunos mais saudável.</S.Paragrafo>
        </S.Column>
        <S.Column> 
            <S.ContainerIcons>
            <S.Titulo2> Siga nas redes socias</S.Titulo2>
<InstagramButton href="https://www.instagram.com/homefight_/"  target="_blank"><IonIcon name="logo-instagram"></IonIcon></InstagramButton> 
             <TikTokButton href="https://www.tiktok.com/@homefight_ "  target="_blank"><IonIcon name="logo-tiktok"></IonIcon></TikTokButton>
             <WhatsappButton href="https://api.whatsapp.com/send/?phone=5511989188558&text=Ol%C3%A1&type=phone_number&app_absent=0"  target="_blank"><IonIcon name="logo-whatsapp"></IonIcon> </WhatsappButton>
             </S.ContainerIcons>
            <S.ContainerIcons>               
            </S.ContainerIcons>
        </S.Column>
    </S.Container>
    </S.ContainerBox>
    </>)
}