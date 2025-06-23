import React, { useState } from "react";
import options from "../../assets/navbar/options.svg";
import list from "../../assets/home-left-component/list-icon.svg";
import Options from "./Options";

const PlaylistOption: React.FC = () => {
  const [showOption, setShowOption] = useState(false);
  return (
    <div className=" px-6 relative">
      <div className=" flex flex-row justify-between items-center px-4 py-3 pb-12">
        <img
          src={options}
          className=" h-8 w-8 cursor-pointer"
          onClick={() => setShowOption(!showOption)}
        />
        <div className=" flex flex-row gap-3 items-center">
          <span className=" text-white">List</span>
          <img src={list} className=" h-8 w-8 cursor-pointer" />
        </div>
      </div>
      <div className=" border-b-2 border-[#474747]" />
      {showOption && (
        <div className=" absolute top-12 left-12 bg-[#0D0E0F] h-72 w-48  z-10 rounded-xl py-4 px-3">
          <Options />
        </div>
      )}
    </div>
  );
};

export default PlaylistOption;
