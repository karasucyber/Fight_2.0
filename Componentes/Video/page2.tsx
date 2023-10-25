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

  const videoId = 'mzacTvTxzUY'; 

  return (
    <S.Container>
      <S.Titulo>Veja</S.Titulo>
      <YouTube videoId={videoId} />
    </S.Container>
  );
};

export default Page2;
