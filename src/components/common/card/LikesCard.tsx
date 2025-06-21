import React from "react";
import { likes } from "../../../data/app.data";
import LikeCard from "./LikeCard";

const LikesCard: React.FC = () => {
  return (
    <div className=" flex flex-col gap-8 overflow-y-auto">
      {likes.map((like) => {
        return (
          <LikeCard
            key={like.id}
            id={like.id}
            title={like.title}
            songCount={like.songCount}
            cover={like.cover}
          />
        );
      })}
    </div>
  );
};

export default LikesCard;
