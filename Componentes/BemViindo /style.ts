import styled from "styled-components";
 

export const ContainerTex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 400px;
width: 100%;



`
export const ContaineVid = styled.div`
height: 100%;
width: 100%;
padding: 50px;
margin: 0px;

`


export const Titulo =styled.h1`
color: white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */
font-size: 65px; 
/* Outros
@media only screen and (max-width: 768px) {
    font-size: 40px;
}
`
export const Paragrafo = styled.p`
padding:10px;
color:white;
font-size: 35px;

text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */
@media only screen and (max-width: 768px) {
 font-size: 24px;
}
`
export const Butao = styled.button`
background-color: transparent;
color: white;
border: none;
font-size: 20px;
cursor: pointer;
display: flex;
align-items: center;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */


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
    height: 100%; 
    width: 100%; 
    padding: 20px; 
}`;
