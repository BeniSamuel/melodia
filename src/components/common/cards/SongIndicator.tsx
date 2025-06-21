import React from "react";
import { usePlayer } from "../../../context/PlayContext";
import AudioPlayer from "../card/AudioPlayer";

const SongIndicator: React.FC = () => {
  const { currentSong } = usePlayer();

  return (
    <div className=" text-white px-3 flex flex-row justify-between items-center">
      <div className=" flex flex-row gap-4 items-center ">
        <div className=" bg-gradient-to-b from-[#225673] to-[#40A2D9] h-16 w-16 rounded-xl" />
        <div>
          <div>{currentSong?.song_name}</div>
          <div className=" text-[#686868]">{currentSong?.artist}</div>
        </div>
      </div>
      <div>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default SongIndicator;
