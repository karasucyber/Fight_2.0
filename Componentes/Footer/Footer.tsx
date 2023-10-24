import React from "react";
import * as S from "./style";
import { IonIcon } from '@ionic/react';
import { Icon } from "ionicons/dist/types/components/icon/icon";
import { Button } from "reactstrap";

export const Footer = ()=>{
    return(<>
    <S.ContainerBox> 
    <S.Container>
        <S.Column> 
            <S.Titulo> Atendimento </S.Titulo>
            <S.Paragrafo> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) </S.Paragrafo>
            
            <S.ContainerTexto> 
                <S.Titulo3> Nós envie :</S.Titulo3>
            <p> email@jsndajsfnas.com.br </p>
            </S.ContainerTexto>
    
        </S.Column>

        <S.Column> 
            <S.Titulo2> Home fight</S.Titulo2>
            <S.Paragrafo> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) </S.Paragrafo>
        </S.Column>

        <S.Column> 
            <h3> Nós siga nas redes socias</h3>
            <S.ContainerIcons><Button><IonIcon name="logo-instagram"></IonIcon><a>@Homefight_</a></Button> 
             <Button><IonIcon name="logo-tiktok"></IonIcon> <a>@Homefight_</a></Button>
             </S.ContainerIcons>

            <S.ContainerIcons>
                <h3> Formas de Pagamento </h3>
            </S.ContainerIcons>
        </S.Column>

    </S.Container>
    </S.ContainerBox>
    </>)
}