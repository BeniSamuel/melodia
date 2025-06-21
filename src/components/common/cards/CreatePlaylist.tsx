import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayListCard } from "../../../types/playlist-card.type";

const CreatePlaylist: React.FC<PlayListCard> = ({
  createPlaylist,
  setCreatePlaylist,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (createPlaylist) {
      navigate("/playlist");
    }
  };
  return (
    <div>
      <button className=" bg-[#000000]" onClick={handleClick}>
        Create a new playlist
      </button>
    </div>
  );
};

export default CreatePlaylist;
