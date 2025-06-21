import React from "react";
import { songs } from "../../data/app.data";
import PopularCard from "./PopularCard";

const PopularSongCard: React.FC = () => {
  return (
    <div className=" flex flex-row gap-12 overflow-x-auto">
      {songs.map((song) => {
        return (
          <PopularCard
            key={song.id}
            id={song.id}
            artist={song.artist}
            cover={song.cover}
            song_name={song.song_name}
          />
        );
      })}
    </div>
  );
};

export default PopularSongCard;
