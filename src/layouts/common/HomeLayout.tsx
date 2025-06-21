import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import HomeLeftCard from "../../components/common/cards/HomeLeftCard";
import SongsCard from "../../components/common/cards/SongsCard";
import { SongCardType } from "../../types/song-card.type";

const HomeLayout: React.FC<SongCardType> = ({ children }) => {
  return (
    <div className=" bg-[#000000] h-[100vh] py-[0.35rem] px-[0.35rem] flex flex-col gap-3">
      <div>
        <Navbar />
      </div>
      <div className=" flex flex-row gap-3">
        <HomeLeftCard />
        <SongsCard>{children}</SongsCard>
      </div>
    </div>
  );
};

export default HomeLayout;
