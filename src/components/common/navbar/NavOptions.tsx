import React from "react";
import { Link } from "react-router-dom";

const NavOptions: React.FC = () => {
  return (
    <div className=" bg-[#232222] text-white text-sm px-4 py-3 rounded-lg">
      <ul className=" flex flex-col gap-3">
        <li className=" hover:underline">
          <Link to={"/home"}>Home</Link>
        </li>
        <li className=" hover:underline">Edit</li>
        <li className=" hover:underline">Settings</li>
      </ul>
    </div>
  );
};

export default NavOptions;
