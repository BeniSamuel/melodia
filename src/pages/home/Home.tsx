import React from "react";
import HomeLayout from "../../layouts/common/HomeLayout";
import PopularSong from "../../components/home/PopularSong";
import RecentlyPlayed from "../../components/home/RecentlyPlayed";

const Home: React.FC = () => {

  return (
    <HomeLayout>
      <div className=" flex flex-col py-5 px-5 gap-16">
        <PopularSong />
        <RecentlyPlayed />
      </div>
    </HomeLayout>
  );
};

export default Home;
