import React, { useState } from "react";
import { SongType } from "../../types/song.type";
import play_button from "../../assets/popular/play_button.svg";
import Button from "../common/PlayStopButton/Button";

const PopularCard: React.FC<SongType> = (prop) => {
  const [showPlay, setShowPlay] = useState(false);
  return (
    <div
      className=" flex flex-col gap-3 cursor-pointer relative"
      onMouseEnter={() => {
        setShowPlay(true);
      }}
      onMouseLeave={() => {setShowPlay(false)}}
    >
      <div className={` bg-gray-500 h-56 w-64 rounded-lg`}>
        {prop.cover}
      </div>
      <div className=" flex flex-row justify-between">
        <div>{prop.song_name}</div>
        <div>{prop.artist}</div>
      </div>
      {showPlay ? (
        <div className=" absolute bottom-12 right-4 h-12 w-12">
          {/* <img src={play_button} /> */}
          <Button />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PopularCard;
