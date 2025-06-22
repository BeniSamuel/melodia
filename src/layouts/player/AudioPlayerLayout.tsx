import React from "react";
import SongIndicator from "../../components/common/cards/SongIndicator";
import { SongCardType } from "../../types/song-card.type";

const AudioPlayerLayout: React.FC<SongCardType> = ({ children }) => {
  return (
    <div className=" flex flex-col bg-[#000000] h-[100vh]">
      <div className="  h-[85vh] px-16 py-6">
        <div className=" bg-gradient-to-b from-[#225673] to-[#40A2D9] rounded-xl h-full">
          {children}
        </div>
      </div>
      <div>
        <SongIndicator />
      </div>
    </div>
  );
};

export default AudioPlayerLayout;
