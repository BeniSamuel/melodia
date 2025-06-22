import React from "react";
import { SongCardType } from "../../../types/song-card.type";
import { usePlayer } from "../../../context/PlayContext";

const SongsCard: React.FC<SongCardType> = ({ children }) => {
  const { isPlaying } = usePlayer();
  return (
    <div
      className={` bg-[#131313] rounded-xl overflow-y-auto ${
        isPlaying ? "w-[42%] h-[75vh]" : "w-[70%]"
      }`}
    >
      {children}
    </div>
  );
};

export default SongsCard;
