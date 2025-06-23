import React from "react";
import search from "../../../assets/navbar/search-button.svg";
import list from "../../../assets/home-left-component/list-icon.svg";
import { PlayListCard } from "../../../types/playlist-card.type";

const PlaylistCard: React.FC<PlayListCard> = ({
  setCreatePlaylist,
  createPlaylist,
}) => {
  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex flex-row justify-between items-center">
        <div className=" text-white">Playlists</div>
        <button
          className=" text-white text-xl"
          onClick={() => {
            setCreatePlaylist(!createPlaylist);
          }}
        >
          +
        </button>
      </div>
      <div className=" flex flex-row justify-between items-center">
        <div className=" text-white flex flex-row gap-3">
          <img src={search} className=" h-5 w-5" />
          <input
            type="search"
            placeholder="search"
            className=" outline-none bg-transparent placeholder:text-white"
          />
        </div>
        <div className=" flex flex-row items-center gap-3">
          <div className=" text-[#737272]">Recent</div>
          <img src={list} className=" h-10 w-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
