import React from "react";
import { SongCardType } from "../../../types/song-card.type";

const SongsCard: React.FC<SongCardType> = ({ children }) => {
  return <div className=" bg-[#131313] w-[70%] rounded-xl">{children}</div>;
};

export default SongsCard;
