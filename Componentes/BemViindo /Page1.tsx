import React from "react";
import styled from "styled-components"; // Assuming you want to use styled-components
import { createContext } from 'react'
 
const Context = createContext();

const Container = styled.div`
height: 100%;
`;

const Section =  styled.div`
height 100hv;
scroll-snap-aling:center;
display:flex;
align-items: center;
justify-content: center;

@meida only (max-width: 768px){ 
  height: 200vh;
}
`;



const Page1 = () => {
  return (
    <div>
    <Section> 
      <Container> 
     
      </Container>
      </Section>
     
    </div>
  );
}


export default Page1;