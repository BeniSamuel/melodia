import React from "react";

const FindSomething: React.FC = () => {
  return (
    <div className=" px-6 flex flex-col gap-7 py-5">
      <div className=" text-white font-bold text-[1.35rem]">
        Let's find something for your playlist
      </div>
      <div>
        <input
          type="search"
          placeholder="Search for content"
          className=" placeholder:text-[#858585] outline-none bg-[#363535] py-3 px-4 text-white w-96 rounded-lg"
        />
      </div>
    </div>
  );
};

export default FindSomething;
