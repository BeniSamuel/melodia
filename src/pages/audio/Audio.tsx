import React from "react";
import { useParams } from "react-router-dom";
import AudioPlayerLayout from "../../layouts/player/AudioPlayerLayout";

const Audio: React.FC = () => {
  const { id } = useParams();
  return (
    <AudioPlayerLayout>
      <div>{id}</div>
    </AudioPlayerLayout>
  );
};

export default Audio;
