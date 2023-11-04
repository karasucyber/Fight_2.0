import styled from "styled-components";
 

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
background-image: url("");
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
display: block-inline;
width: 80%;
height: 50%;
font-size: 14px;
border-radius: 10px;
box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
padding: 20px;
margin: 5px;
color: black;
text-align: center;
font-size: 18px;
font-weight: bold;
}
`

export const Titulo =styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 50px;
color:white;
padding:10px;
gap: 15px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Sombra preta com opacidade 1 */
color:black;
@media only screen and (max-width: 768px) {
    font-size: 40px;
}
`