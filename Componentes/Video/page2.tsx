import React from 'react';
import * as S from './style';
import YouTube from 'react-youtube';

export const Page2 = () => {
  const initialOpts = {
    width: '640', 
    height: '390', 
    playerVars: {
      autoplay: 1,
    },
  };

  const opts = {
    ...initialOpts,
  };

  const handleWindowResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      opts.width = '300'; 
      opts.height = '200'; 
    } else if (screenWidth <= 1024) {
      opts.width = '480'; 
      opts.height = '270'; 
    } else {
      opts.width = '640'; 
      opts.height = '390'; 
    }
  };
  window.addEventListener('resize', handleWindowResize);
  handleWindowResize();

  const videoId = 'mzacTvTxzUY'; 

  return (
    <S.Container>
      <S.Titulo>Veja</S.Titulo>
      <YouTube videoId={videoId} opts={opts} />
    </S.Container>
  );
};

export default Page2;
