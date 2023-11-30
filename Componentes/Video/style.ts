import styled from "styled-components";
 

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
color: black;

`;

export const VideoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
border-radius: 20px;
overflow: hidden;
`;


export const Paragrafo = styled.p`
  display: block;
  width: 100%; /* Alterado para 100% para ocupar toda a largura do contêiner pai */
  max-width: 600px; /* Define uma largura máxima para evitar que o texto fique muito largo em telas grandes */
  font-size: 16px; /* Ajustado para um tamanho de fonte mais legível */
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 15px; /* Reduzido o padding para deixar mais espaço em telas menores */
  margin: 10px 0; /* Alterado o margin para criar mais espaço ao redor do componente */
  color: #9A1212;
  text-align: center;
  font-weight: bold;

  @media (min-width: 768px) {
    /* Altera o estilo para telas maiores (768px e acima) */
    font-size: 18px;
    padding: 20px;
  }
}
`;



export const Titulo =styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 50px;
color: #9A1212;
margin: 20px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */

@media only screen and (max-width: 768px) {
    font-size: 40px;
}`