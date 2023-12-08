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
            <S.Paragrafo> A Home Fight iniciou sua história em um momento desafiador em todo o mundo: a pandemia. Nossa empresa cresceu com o propósito de proporcionar saúde física e mental a todos os nossos alunos. Desde então, crescemos e evoluímos, mantendo-nos fiéis ao nosso objetivo de tornar a vida de nossos alunos mais saudável.






</S.Paragrafo>
        </S.Column>
        <S.Column> 
            <S.Titulo2> Home fight</S.Titulo2>
            <S.Paragrafo> 
A Home Fight teve seu início durante um momento desafiador da história: a pandemia. Cumprimos rigorosamente os protocolos de segurança estabelecidos na época, e nossa empresa emergiu como um ponto de apoio fundamental para a saúde física e mental de nossos clientes.

Fundada por Henrique Garcez, um visionário que deixou um legado duradouro, a Home Fight continua a carregar a tocha de seu compromisso. Nossa missão vai além do simples treinamentonn é promover bem-estar e qualidade de vida.

Desde então, crescemos e evoluímos, mantendo-nos fiéis ao nosso objetivo de tornar a saúde acessível e eficaz, independentemente das circunstâncias. Na Home Fight, valorizamos cada passo de nosso percurso e estamos comprometidos em ser uma fonte de força e resiliência para nossos clientes, inspirando todos a alcançar seu melhor potencial. </S.Paragrafo>
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