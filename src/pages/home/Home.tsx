import React, {useState} from "react";
import HomeLayout from "../../layouts/common/HomeLayout";
import PopularSong from "../../components/home/PopularSong";

const Home: React.FC = () => {
  const [showLeftComponent, setShowLeftComponent] = useState(false);
  return (
    <HomeLayout>
      <div className=" flex flex-col py-5 px-5">
        <PopularSong />
      </div>
    </HomeLayout>
  );
};

export default Home;
