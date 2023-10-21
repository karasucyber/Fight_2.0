import styled from "styled-components";
 

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
top: 0;
height: 100%;
width: 100%;
padding: 20px;
margin: 10px;
background-image: url("");
background-color: ;

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

width: 50%;
height: 50%;
font-size: 14px;
color red;
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
@media only screen and (max-width: 768px) {
    font-size: 40px;

}


`