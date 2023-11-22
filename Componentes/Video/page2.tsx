import React, { useState, useEffect } from 'react';
import * as S from './style';
import YouTube from 'react-youtube';

export const Page2 = () => {
  const videoId = 'mzacTvTxzUY';
  const [opts, setOpts] = useState({
    width: '640', // Largura padrão para telas maiores
    height: '390', // Altura padrão para telas maiores
    playerVars: {
      autoplay: 1,
    },
  });

  useEffect(() => {
    const updateVideoSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setOpts({
          width: '300', // Ajuste de largura para telas menores
          height: '200', // Ajuste de altura para telas menores
          playerVars: {
            autoplay: 1,
          },
        });
      } else if (screenWidth <= 1024) {
        setOpts({
          width: '480', // Ajuste de largura para telas de tamanho médio
          height: '270', // Ajuste de altura para telas de tamanho médio
          playerVars: {
            autoplay: 1,
          },
        });
      } else {
        setOpts({
          width: '640', // Largura padrão para telas maiores
          height: '390', // Altura padrão para telas maiores
          playerVars: {
            autoplay: 1,
          },
        });
      }
    };

    // Execute a função quando a janela for redimensionada
    window.addEventListener('resize', updateVideoSize);
    updateVideoSize(); // Execute a função uma vez para definir as opções iniciais

    return () => {
      // Remova o ouvinte do evento de redimensionamento quando o componente for desmontado
      window.removeEventListener('resize', updateVideoSize);
    };
  }, []);

  return (
    <S.Container>
      <S.Titulo> o que somos ?</S.Titulo>
      <S.VideoContainer>
        <YouTube videoId={videoId} opts={opts} />
      </S.VideoContainer>
      <S.Paragrafo>
        <p>Somos uma empresa de treinamento personalizado que tem como objetivo levar saúde até você, no local que desejar, para aulas individuais ou em grupo. 
Ajudamos no emagrecimento, criamos hábitos que tiram as pessoas do sedentarismo, diminuindo o estresse e ansiedade, dentre outros diversos benefícios.
Possuímos uma metodologia com treinos dinâmicos e individualizados para cada um de nossos alunos, valorizando a consistência e ajudando você a manter um estilo de vida saudável a longo prazo.  </p>
      </S.Paragrafo>
    </S.Container>
  );
};

export default Page2;
