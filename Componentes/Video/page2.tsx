import React, { useRef } from 'react';
import * as S from './style';
interface Page2Props {
  videoSource: string;
}

const Page2: React.FC<Page2Props> = ({ videoSource }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Função para reproduzir ou pausar o vídeo
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div>
        <S.Container> 
        <video ref={videoRef} controls width="640" height="360">
        <source src={videoSource} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <button onClick={togglePlay}>Reproduzir/Pausar</button>
        </S.Container>
    
    </div>
  );
};

export default Page2;
