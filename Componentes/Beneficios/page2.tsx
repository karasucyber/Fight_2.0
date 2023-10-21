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
      <S.Container>
        <S.VideoContainer>
          <YouTubePlayer videoId="2g811Eo7K8U" />
        </S.VideoContainer>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text...
          (long text)
        </p>
      </S.Container>
    </>
  );
}
 export default Page2;