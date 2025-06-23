import React from "react";

const Options: React.FC = () => {
  return (
    <div className=" flex flex-col text-white items-start px-[0.85rem] py-7 gap-5 cursor-pointer">
      <div className=" hover:underline">Edit Playlist</div>
      <div className=" hover:underline">Delete Playlist</div>
      <div className=" hover:underline">Update Playlist</div>
      <div className=" hover:underline">Copy Playlist</div>
      <div className=" hover:underline">Download Playlist</div>
    </div>
  );
};

export default Options;
