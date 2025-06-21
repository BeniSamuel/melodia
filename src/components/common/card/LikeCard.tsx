import React, {useState} from "react";
import { LikeType } from "../../../types/likes.type";
import cover from "../../../assets/home-left-component/like-cover.svg";
import Button from "../PlayStopButton/Button";

const LikeCard: React.FC<LikeType> = (props) => {
  const [playButton, setPlayButton] = useState(false);
  return (
    <div className=" flex flex-row items-center gap-3 cursor-pointer">
      <div className=" relative" onMouseEnter={() => {setPlayButton(true)}} onMouseLeave={() => {setPlayButton(false)}}>
        {
          playButton ? (<div className=" absolute h-10 w-10 bottom-[0.4rem] left-2"><Button /></div>) : (<></>)
        }
        <img src={cover} />
      </div>
      <div className=" text-white">
        <div>{props.title}</div>
        <div className=" text-[#9e9b9b]">Playlist. {props.songCount} songs</div>
      </div>
    </div>
  );
};

export default LikeCard;
