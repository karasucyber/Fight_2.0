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
        <p> Na Homefight, somos uma empresa que oferece serviços de personal que vão até você, simplificando nossa busca por qualidade de vida. Nós vamos até você, facilitando a incorporação de hábitos saudáveis ao seu dia a dia. Além de promover a saúde, nosso compromisso é criar memórias significativas com meus alunos.

Minha abordagem única não se limita a exercícios físicos; ela se estende para nutrir sua mente e enriquecer sua vida. Valorizamos a consistência, ajudando você a manter um estilo de vida saudável a longo prazo.

Ao fazer parte da Homefight, você não apenas se beneficia de um corpo mais forte, mas também da construção de memórias inesquecíveis que enriquecerão nossa jornada. Junte-se a nós para experimentar a plenitude da vida, uma vida repleta de saúde, bem-estar e momentos que você apreciará para sempre. </p>
      </S.Paragrafo>
    </S.Container>
  );
};

export default Page2;
