import React, { useState } from "react";
import searchButton from "../../../assets/navbar/search-button.svg";

const Search: React.FC = () => {
  const [searchContent, setSearchContent] = useState<string>("");
  return (
    <div className=" h-12 border-2 border-[#444141] rounded-lg w-[30rem] flex flex-row justify-between">
      <input
        placeholder="Search..."
        value={searchContent}
        onChange={(e) => {
          setSearchContent(e.target.value);
        }}
        className=" text-white placeholder:text-[#302d2d] bg-transparent outline-none px-3"
      />
      <button className=" bg-[#393939] px-6 outline-none rounded-tr-lg rounded-br-lg">
        <img src={searchButton} className=" h-5 w-5" />
      </button>
    </div>
  );
};

export default Search;
