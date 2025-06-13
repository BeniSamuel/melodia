import React from "react";
import spotify from "../../assets/welcome/spotify-icon.svg";

const Welcome: React.FC = () => {
  return (
    <div className=" bg-[#131313] h-[100vh] flex flex-col items-center justify-center">
      <div className=" flex flex-col items-center gap-10">
        <div className=" text-white ">Welcome to Melodia</div>
        <div>
          <button className=" text-white flex flex-row font-normal gap-5 items-center bg-[#000000] py-4 px-6 rounded-lg">
            <img src={spotify} className=" h-10 w-10"/>
            Continue with Spotify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
