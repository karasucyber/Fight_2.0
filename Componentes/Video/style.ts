import styled from "styled-components";

// Container component with responsive background image
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-image: url("");
  color: black;

  @media only screen and (max-width: 768px) {
    padding: 10px; // Adjust padding for smaller screens
  }
`;

// VideoContainer with responsive width and height
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 80%; // Adjust width for smaller screens
    height: 60vh; // Adjust height for smaller screens
  }
`;

// Paragrafo with responsive font size and color
export const Paragrafo = styled.p`
  display: block-inline;
  width: 80%;
  height: 50%;
  font-size: 14px;
  color: red;

  @media only screen and (max-width: 768px) {
    font-size: 12px; // Adjust font size for smaller screens
  }
`;

// Titulo with responsive font size and color
export const Titulo = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: white;
  padding: 10px;
  gap: 15px;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 40px; // Adjust font size for smaller screens
  }
`;
