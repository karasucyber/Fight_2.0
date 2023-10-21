import React from "react";
import * as S from './style';
import YouTube from 'react-youtube';
interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  const opts = {
    height: '300px',
    width: '600px',
    border: "20px",
    playerVars: {
      autoplay: 1, // Autoplay the video
    },
  };

  const onReady = (event: any) => {
    // Handle onReady events if necessary
  };

  const onPlay = (event: any) => {
    // Handle onPlay events if necessary
  };

  return (
    <YouTube videoId={videoId} opts={opts} onReady={onReady} onPlay={onPlay} />
  );
};


export const Page2 = () => {
  return (
    <>
    <S.Titulo> Veja na prática </S.Titulo>
      <S.Container>
        <S.VideoContainer>
          <YouTubePlayer videoId="2g811Eo7K8U" />
        </S.VideoContainer>
        <S.Paragrafo> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</S.Paragrafo>
    
      </S.Container>

    </>
  );
}
 export default Page2;