import React from 'react';
import * as S from './style';
import YouTube from 'react-youtube';

export const Page2 = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = 'mzacTvTxzUY'; // Coloque o ID do vídeo desejado

  return (
    <S.Container>
      <S.Titulo>Veja</S.Titulo>
        <YouTube videoId={videoId} opts={opts} />
    </S.Container>
  );
};

export default Page2;
