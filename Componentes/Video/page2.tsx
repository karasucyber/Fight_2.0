import React from 'react';
import * as S from './style';
import YouTube from 'react-youtube';

export const Page2 = () => {
  // Configuração inicial do vídeo
  const initialOpts = {
    width: '700', 
    height: '300', 
    playerVars: {
      autoplay: 1,
    },
  };

  // ID do vídeo do YouTube
  const videoId = 'mzacTvTxzUY'; 

  return (
    <S.Container>
      <S.Titulo>Veja</S.Titulo>
      <S.VideoContainer>
        <YouTube videoId={videoId} opts={initialOpts} /> {/* Usando opts para fornecer as opções */}
 </S.VideoContainer>
     <S.Paragrafo>
        <p> lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
      </S.Paragrafo>
     
    </S.Container>
  );
};

export default Page2;
