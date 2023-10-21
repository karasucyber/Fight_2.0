import styled from "styled-components";
 
export const Titulo =styled.h1`
font-size: 50px;
color:white;
padding:10px;
gap: 15px;
@media only screen and (max-width: 768px) {
    font-size: 40px;

}


`
export const Paragrafo = styled.p`
padding:10px;
color:white;
font-size: 24px;
gap: 15px;
@media only screen and (max-width: 768px) {
 font-size: 24px;

}

`
export const Butao = styled.button`
padding:5px;
color: black;
background: white;
margin: 30px;
@media only screen and (max-width: 768px) {
    font-size: 20px;
    border-radius: 10px
   
   }
`

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding: 20px;
margin: 10px;
background-image: url("fundos.jpeg");
background-color: #cccccc;


@media only screen and (max-width: 768px) {
    flex-direction: column; /* Altere a direção da flexbox para empilhar em telas menores */
    height: 100%; /* Ajuste a altura para ocupar 100% da tela */
    width: 100%; /* Ajuste a largura para ocupar 100% da tela */
    padding: 20px; /* Adicione algum espa
    


}`;
