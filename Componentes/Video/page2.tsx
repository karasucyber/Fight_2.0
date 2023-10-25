import React from 'react';
import * as S from './style';
import YouTube from 'react-youtube';

export const Page2 = () => {
  // Define initial options for the YouTube player
  const initialOpts = {
    width: '640', // Default width
    height: '390', // Default height
    playerVars: {
      autoplay: 1,
    },
  };

  // Update options based on screen width
  const opts = {
    ...initialOpts,
  };

  // Function to handle window resize and adjust video size
  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;

    // Define different options based on screen width
    if (screenWidth <= 768) {
      opts.width = '300'; // Adjust width for smaller screens
      opts.height = '200'; // Adjust height for smaller screens
    } else if (screenWidth <= 1024) {
      opts.width = '480'; // Adjust width for medium-sized screens
      opts.height = '270'; // Adjust height for medium-sized screens
    } else {
      opts.width = '640'; // Default width for larger screens
      opts.height = '390'; // Default height for larger screens
    }
  };

  // Attach the handleWindowResize function to the window's resize event
  window.addEventListener('resize', handleWindowResize);

  // Initial call to set the initial dimensions
  handleWindowResize();

  const videoId = 'mzacTvTxzUY'; // Coloque o ID do vídeo desejado

  return (
    <S.Container>
      <S.Titulo>Veja</S.Titulo>
      <YouTube videoId={videoId} opts={opts} />
    </S.Container>
  );
};

export default Page2;
