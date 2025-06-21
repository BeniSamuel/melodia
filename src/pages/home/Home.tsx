import React from "react";
import HomeLayout from "../../layouts/common/HomeLayout";
import PopularSong from "../../components/home/PopularSong";

const Home: React.FC = () => {

  return (
    <HomeLayout>
      <div className=" flex flex-col py-5 px-5">
        <PopularSong />
      </div>
    </HomeLayout>
  );
};

export default Home;
