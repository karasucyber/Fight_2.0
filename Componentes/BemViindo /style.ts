import styled from "styled-components";
 

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding: 100px;
margin: 0 auto;
max-width: 960px; 
background-image: url("fundos.jpeg");
background-color: #cccccc;


@media only screen and (max-width: 768px) {
    padding: 20px; /* Reduzimos o padding para telas menores */


}`;

export const Section = styled.div`height: 100vh;

@media only screen and (max-width: 768px) {
}`;