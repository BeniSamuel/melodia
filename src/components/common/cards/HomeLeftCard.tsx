import React, { useState } from "react";
import LikesCard from "../card/LikesCard";
import PlaylistCard from "../card/PlaylistCard";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "../../../context/PlayContext";

const HomeLeftCard: React.FC = () => {
  const [createPlaylist, setCreatePlaylist] = useState<boolean>(false);
  const { isPlaying } = usePlayer();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/playlist");
  }

  return (
    <div className={` bg-[#131313] w-[30%] rounded-xl px-7 py-4 flex flex-col gap-10 relative ${ isPlaying ? "h-[75vh]" : "h-[85vh]"  }`}>
      <PlaylistCard
        createPlaylist={createPlaylist}
        setCreatePlaylist={setCreatePlaylist}
      />
      {createPlaylist ? (
        <div className=" absolute text-white right-6 top-10">
          {" "}
          <button
            onClick={handleClick}
            className=" bg-[#000000] px-4 py-4 rounded-xl"
          >
            create a new playlist
          </button>{" "}
        </div>
      ) : (
        <></>
      )}
      <LikesCard />
    </div>
  );
};

export default HomeLeftCard;
