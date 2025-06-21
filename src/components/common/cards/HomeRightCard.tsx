import React from "react";
import { usePlayer } from "../../../context/PlayContext";
import more_options from "../../../assets/navbar/options.svg";
import close from "../../../assets/home-right-component/close.svg";

const HomeRightCard: React.FC = () => {
  const { currentSong, setIsPlaying } = usePlayer();

  return (
    <div className=" bg-[#131313] h-[85vh] w-[28%] rounded-xl flex flex-col px-5 py-4">
      <div className=" flex flex-row justify-between items-center">
        <div className=" text-white">{currentSong?.song_name}</div>
        <div className=" flex flex-row gap-3 items-center">
          <div className=" h-6 w-6">
            <img src={more_options} />
          </div>
          <div
            className=" h-4 w-4 cursor-pointer"
            onClick={() => {
              setIsPlaying(false);
            }}
          >
            <img src={close} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRightCard;
