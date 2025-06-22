import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import HomeLeftCard from "../../components/common/cards/HomeLeftCard";
import SongsCard from "../../components/common/cards/SongsCard";
import { SongCardType } from "../../types/song-card.type";
import { usePlayer } from "../../context/PlayContext";
import HomeRightCard from "../../components/common/cards/HomeRightCard";
import SongIndicator from "../../components/common/cards/SongIndicator";

const HomeLayout: React.FC<SongCardType> = ({ children }) => {
  const { isPlaying } = usePlayer();

  return (
    <div className=" bg-[#000000] h-[100vh] py-[0.35rem] px-[0.35rem] flex flex-col gap-3 relative">
      <div>
        <Navbar />
      </div>
      <div className=" flex flex-row gap-3 overflow-y-auto">
        <HomeLeftCard />
        <SongsCard>{children}</SongsCard>
        {isPlaying && <HomeRightCard />}
      </div>
      { isPlaying && <SongIndicator />}
    </div>
  );
};

export default HomeLayout;
