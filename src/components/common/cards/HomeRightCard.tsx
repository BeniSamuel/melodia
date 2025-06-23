import React from "react";
import { usePlayer } from "../../../context/PlayContext";
import more_options from "../../../assets/navbar/options.svg";
import close from "../../../assets/home-right-component/close.svg";

const HomeRightCard: React.FC = () => {
  const { currentSong, setIsPlaying, isPlaying } = usePlayer();

  return (
    <div
      className={` bg-[#131313] w-[28%] rounded-xl flex flex-col gap-6 px-5 py-4 ${
        isPlaying ? "h-[75vh]" : "h-[88vh]"
      } `}
    >
      <div className=" flex flex-row justify-between items-center">
        <div className=" text-white">{currentSong?.song_name}</div>
        <div className=" flex flex-row gap-3 items-center">
          <div className=" h-6 w-6">
            <img src={more_options} />
          </div>
          <div
            className=" h-3 w-3 cursor-pointer"
            onClick={() => {
              setIsPlaying(false);
            }}
          >
            <img src={close} />
          </div>
        </div>
      </div>
      <div className=" w-full h-80 bg-gradient-to-b from-[#225673] to-[#40A2D9] rounded-xl" />
      <div>
        <div className=" text-white">{currentSong?.song_name}</div>
        <div className=" text-[#686868]">{currentSong?.artist}</div>
      </div>
    </div>
  );
};

export default HomeRightCard;
