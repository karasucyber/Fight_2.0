import styled from "styled-components";
 

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



@media only screen and (max-width: 768px) {
    padding: 20px; /* Adicione o padding para telas menores, se necessário */
    background-color: #f0f0f0; /* Altere a cor de fundo em telas menores, se necessário */

}`;

export const VideoContainer = styled.div`
padding: 10%;
`;