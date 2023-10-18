import React from 'react';
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

export default YouTubePlayer;
