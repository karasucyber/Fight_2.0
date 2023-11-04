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
            <S.Paragrafo> No que diz respeito ao atendimento, estamos sempre prontos para auxiliá-lo. Nós priorizamos o contato direto e conveniente, principalmente via WhatsApp e Instagram. Na Homefight, temos uma atendente dedicada que está ansiosa para responder a todas as suas perguntas e fornecer o suporte de que você precisa.

Seja para esclarecer dúvidas sobre nossos serviços, agendar sessões de treinamento personalizado ou discutir suas metas de saúde e qualidade de vida, nossa equipe de atendimento está à disposição para ajudar. Eles são a sua conexão direta com a Homefight e estão prontos para tornar sua experiência conosco ainda mais personalizada e satisfatória. Sinta-se à vontade para entrar em contato conosco no WhatsApp ou Instagram a qualquer momento. Estamos aqui para atendê-lo de maneira prática e eficiente.</S.Paragrafo>
        </S.Column>
        <S.Column> 
            <S.Titulo2> Home fight</S.Titulo2>
            <S.Paragrafo> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) </S.Paragrafo>
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