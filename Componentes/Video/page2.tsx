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
      <S.Paragrafo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</S.Paragrafo>
    </S.Container>
  );
};

export default Page2;
