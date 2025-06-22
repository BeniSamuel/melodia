import React, { useEffect, useState } from "react";
import { usePlayer } from "../../../context/PlayContext";
import playing_button from "../../../assets/playing-indicator/playing.svg";
import stop_button from "../../../assets/playing-indicator/stop.svg";
import next from "../../../assets/playing-indicator/right-skip.svg";
import previous from "../../../assets/playing-indicator/left-skip.svg";
import expand_icon from "../../../assets/playing-indicator/expand-icon.svg";
import { useNavigate } from "react-router-dom";

const AudioPlayer: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    nextSong,
    prevSong,
    audioRef,
    volume,
    setVolume,
  } = usePlayer();

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;

      const updateProgress = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
          setDuration(audio.duration);
        }
      };

      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", () =>
        setDuration(audio.duration)
      );

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", () => {});
      };
    }
  }, [audioRef, volume]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const togglePlayPause = () => {
    setIsPlaying(!setIsPlaying)
  }

  return (
    <div className=" text-white rounded-lg ">
      <div className=" flex flex-row items-center justify-between w-[70rem]">
        <div className=" flex flex-col items-center">
          <div className="flex flex-row items-center gap-4">
            <button
              onClick={prevSong}
              className="text-gray-400 hover:text-white"
              aria-label="Previous"
            >
              <div><img src={previous}/></div>
            </button>
            <button
              onClick={togglePlayPause}
              className="text-2xl hover:text-white"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (<div className=" h-12 w-10"><img src={playing_button} /></div>) : (<div><img src={stop_button}/></div>)}
            </button>
            <button
              onClick={nextSong}
              className="text-gray-400 hover:text-white"
              aria-label="Next"
            >
              <div><img src={next}/></div>
            </button>
          </div>
          <div className="flex items-center gap-4 w-[45rem]">
            <span className="text-sm">
              {/* {Math.floor((progress * duration) / 100)} / {Math.floor(duration)}
              s */}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg cursor-pointer accent-[#FFFFFF]"
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-28 h-1 bg-gray-600 rounded-lg cursor-pointer accent-[#FFFFFF]"
          />
          <div className=" h-6 w-6 cursor-pointer" onClick={() => {navigate(`/audio/${currentSong?.id}`)}}>
            <img src={expand_icon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
