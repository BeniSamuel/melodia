import React from "react";

const NavOptions: React.FC = () => {
  return (
    <div className=" bg-[#232222] text-white text-sm px-4 py-3 rounded-lg">
      <ul className=" flex flex-col gap-3">
        <li className=" hover:underline">File</li>
        <li className=" hover:underline">Edit</li>
        <li className=" hover:underline">Settings</li>
      </ul>
    </div>
  );
};

export default NavOptions;
