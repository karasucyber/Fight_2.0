import React from "react";
import * as S from "./style";
import { IonIcon } from '@ionic/react';
import { Icon } from "ionicons/dist/types/components/icon/icon";


export const Footer = ()=>{
    return(<>
    <S.Container>
        <S.Column> 
            <h1> Atendimento </h1>
            <p> xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th </p>
        
            <p> Ligue ou chame no whatsapp </p>
            <p> (11) 999999999 </p>

            <p> Nos envie um email </p>
            <p> email@jsndajsfnas.com.br </p>

        </S.Column>
        <S.Column> 
            <h1> Home fight </h1>
            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        </S.Column>
        <S.Column> 
            <h1> Nós siga nas redes socias</h1>
            <S.ContainerIcons><IonIcon name="logo-instagram"></IonIcon> <a> Home_fight</a> <IonIcon name="logo-tiktok"></IonIcon> <a>@Homefight_</a></S.ContainerIcons>

        </S.Column>

    </S.Container>
    
    
    </>)
}