import React, { useState } from "react";
import options from "../../../assets/navbar/options.svg";
import Search from "../search-input/Search";
import NavOptions from "./NavOptions";

const Navbar: React.FC = () => {
  const [showOption, setShowOption] = useState<boolean>(false);
  return (
    <div className=" bg-[#131313] rounded-lg px-6 py-2 flex flex-row justify-between items-center">
      <div
        className=" cursor-pointer relative"
        onClick={() => {
          setShowOption(!showOption);
        }}
      >
        <img src={options} className=" h-9 w-9" />
        {showOption ? (
          <div className="absolute z-10">
            <NavOptions />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <Search />
      </div>
      <div>
        <div className=" text-black bg-[#737D97] h-9 w-10 rounded-full flex flex-col items-center justify-center font-medium text-xl">
          B
        </div>
      </div>
    </div>
  );
};

export default Navbar;
