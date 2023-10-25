import React from 'react';
import * as S from './style';
import YouTube from 'react-youtube';

export const Page2 = () => {
  // Configuração inicial do vídeo
  const initialOpts = {
    width: '640', 
    height: '390', 
    playerVars: {
      autoplay: 1,
    },
  };

  // ID do vídeo do YouTube
  const videoId = 'mzacTvTxzUY'; 

  return (
    <S.Container>
      <S.Titulo>Veja</S.Titulo>
      <YouTube videoId={videoId} opts={initialOpts} /> {/* Usando opts para fornecer as opções */}
      <S.Paragrafo>
        {/* Seu texto aqui */}
      </S.Paragrafo>
    </S.Container>
  );
};

export default Page2;
