import React from "react";
import HomeLayout from "../../layouts/common/HomeLayout";
import PlaylistOption from "../../components/playlist/PlaylistOption";
import FindSomething from "../../components/playlist/FindSomething";

const Playlist: React.FC = () => {
  return (
    <HomeLayout>
      <div>
        <div className=" bg-gradient-to-br from-[#265067] to-[#010C12] h-[20rem] w-[100%] flex flex-row justify-start items-center px-10">
          <div className=" flex flex-row gap-3">
            <div className=" bg-gradient-to-b from-[#403E3E] to-[#2C2B2B] h-24 w-24 rounded-lg"/>
            <div className=" flex flex-col py-3">
              <div className=" text-white">Playlist</div>
              <div className=" text-white font-semibold text-lg">My Playlist #1</div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-10">
          <PlaylistOption />
          <FindSomething />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Playlist;
