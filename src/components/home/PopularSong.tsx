import React from "react";
import PopularSongCard from "./PopularSongCard";

const PopularSong: React.FC = () => {
  return (
    <div className=" text-white flex flex-col gap-12">
      <div className=" flex flex-row justify-between px-2">
        <div className=" font-medium cursor-pointer">Popular songs</div>
        <div className=" text-[#737272] cursor-pointer">See all</div>
      </div>
      <div className=" w-full">
        <PopularSongCard />
      </div>
    </div>
  );
};

export default PopularSong;
