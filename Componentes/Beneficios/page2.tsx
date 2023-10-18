import React from "react";
import* as S from './style';
import play from "./play";

import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string; // O ID do vídeo do YouTube que você deseja reproduzir
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1, // Iniciar a reprodução automaticamente
    },
  };

  const onReady = (event: any) => {
    // Manipule eventos de inicialização, se necessário
  };

  const onPlay = (event: any) => {
    // Manipule eventos de reprodução, se necessário
  };

  return (
    <YouTube videoId={videoId} opts={opts} onReady={onReady} onPlay={onPlay} />
  );
};


export const Page2 = () => {
    
    return(
      <> 
        <S.Section> 
        <S.Container>
        <h1>titulo</h1>
        <YouTube /> 
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
chunk
The standard  of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. </p>
        </S.Container>
        </S.Section>  
    
    </>)

}

export default Page2;