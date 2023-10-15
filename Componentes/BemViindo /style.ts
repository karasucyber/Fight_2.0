import styled from "styled-components";
 

export const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1000px;
display: flex;
justify-content: space-between;
background: green;


@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}`;

export const Section = styled.div`height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 768px) {
  height: 200vh;
}`;