import React from "react";
import * as S from "./style";
import { IonIcon } from '@ionic/react';
import { Button } from "reactstrap";

export const Footer = ()=>{
    return(<>
    <S.ContainerBox> 
    <S.Container>
        <S.Column> 
            <S.Titulo2> Atendimento </S.Titulo2>
            <S.Paragrafo>  Estamos sempre a disposição para tirar dúvidas sobre nossos serviços, agendar sessões de treinamento e discutir suas metas e objetivos! Entre em contato conosco via Whatsapp e venha cuidar da sua saúde! 
* HOME FIGHT: A Home Fight teve o início da sua história em um momento desafiador em todo mundo: a pandemia. Nossa empresa cresceu com o propósito de levar saúde física e mental para todos nossos alunos. Desde então, crescemos e evoluímos, mas permanecendo fiéis ao nosso objetivo de tornar a vida de nossos alunos mais saudável. </S.Paragrafo>
        </S.Column>
        <S.Column> 
            <S.Titulo2> Home fight</S.Titulo2>
            <S.Paragrafo> A Home Fight teve seu início durante um momento desafiador da história, a pandemia. Cumprindo rigorosamente os protocolos de segurança estabelecidos na época, nossa empresa emergiu como um ponto de apoio fundamental para a saúde física e mental de nossos clientes.

Fundada por Henrique Garcez, um visionário que deixou um legado duradouro, a Home Fight continua a carregar a tocha de seu compromisso. Nossa missão é mais do que apenas treinar; é promover bem-estar e qualidade de vida.

Desde então, crescemos e evoluímos, mas permanecemos fiéis ao nosso objetivo de tornar a saúde acessível e eficaz, independentemente das circunstâncias. Na Home Fight, valorizamos cada passo do nosso percurso e estamos comprometidos em ser uma fonte de força e resiliência para nossos clientes, inspirando todos a alcançar seu melhor potencial. </S.Paragrafo>
        </S.Column>
        <S.Column> 
   <S.Titulo2> Siga nas redes socias</S.Titulo2>
            <S.ContainerIcons><Button href="https://www.instagram.com/homefight_/"  target="_blank"><IonIcon name="logo-instagram"></IonIcon></Button> 
             <Button href="https://www.tiktok.com/@homefight_ "  target="_blank"><IonIcon name="logo-tiktok"></IonIcon></Button>
             <Button href="https://api.whatsapp.com/send/?phone=5511989188558&text=Ol%C3%A1&type=phone_number&app_absent=0"  target="_blank"><IonIcon name="logo-whatsapp"></IonIcon> </Button>
             </S.ContainerIcons>
            <S.ContainerIcons>               
            </S.ContainerIcons>
        </S.Column>
    </S.Container>
    </S.ContainerBox>
    </>)
}