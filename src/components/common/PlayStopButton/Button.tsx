import React, { useState } from "react";
import play_button from "../../../assets/popular/play_button.svg";
import stop_button from "../../../assets/popular/stop_button.svg";

const Button: React.FC = () => {
  const [play, setPlay] = useState(true);
  return (
    <div>
      {play ? (
        <div onClick={() => {setPlay(!play)}}>
          <img src={play_button} />
        </div>
      ) : (
        <div onClick={() => {setPlay(!play)}}>
          <img src={stop_button} />
        </div>
      )}
    </div>
  );
};

export default Button;
