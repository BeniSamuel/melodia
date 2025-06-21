// import { createContext, useContext, useState, ReactNode } from "react";
// import { SongType } from "../types/song.type";

// interface PlayerContextType {
//   currentSong: SongType | null;
//   isPlaying: boolean;
//   setIsPlaying: (bool: boolean) => void;
//   playSong: (song: SongType) => void;
// }

// const PlayContext = createContext<PlayerContextType | undefined>(undefined);

// const PlayProvider = ({ children }: { children: ReactNode }) => {
//   const [currentSong, setCurrentSong] = useState<SongType | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const playSong = (song: SongType) => {
//     setCurrentSong(song);
//     setIsPlaying(true);
//   };

//   return (
//     <PlayContext.Provider value={{ currentSong, isPlaying, playSong, setIsPlaying }}>
//       {children}
//     </PlayContext.Provider>
//   );
// };

// export default PlayProvider;

// export const usePlayer = () => {
//   const context = useContext(PlayContext);
//   if (!context) throw new Error("usePlayer must be used inside PlayProvider");
//   return context;
// };

import { createContext, useContext, useState, useRef, ReactNode } from "react";
import { SongType } from "../types/song.type";

interface PlayerContextType {
  currentSong: SongType | null;
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
  playSong: (song: SongType, index?: number) => void;
  nextSong: () => void;
  prevSong: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  volume: number;
  setVolume: (value: number) => void;
  currentSongIndex: number;
  songList: SongType[];
  setSongList: (songs: SongType[]) => void;
}

const PlayContext = createContext<PlayerContextType | undefined>(undefined);

const PlayProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<SongType | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume 50%
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [songList, setSongList] = useState<SongType[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSong = (song: SongType, index?: number) => {
    setCurrentSong(song);
    if (index !== undefined) setCurrentSongIndex(index);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = song.song_name;
      audioRef.current.volume = volume;
      audioRef.current
        .play()
        .catch((error) => {
          console.error("Playback error:", error);
          setIsPlaying(false);
        });
    }
  };

  const nextSong = () => {
    if (songList.length > 0 && currentSongIndex < songList.length - 1) {
      playSong(songList[currentSongIndex + 1], currentSongIndex + 1);
    }
  };

  const prevSong = () => {
    if (songList.length > 0 && currentSongIndex > 0) {
      playSong(songList[currentSongIndex - 1], currentSongIndex - 1);
    }
  };

  // const togglePlayPause = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //       setIsPlaying(false);
  //     } else {
  //       audioRef.current
  //         .play()
  //         .catch((error) => console.error("Playback error:", error));
  //       setIsPlaying(true);
  //     }
  //   }
  // };

  return (
    <PlayContext.Provider
      value={{
        currentSong,
        isPlaying,
        setIsPlaying,
        playSong,
        nextSong,
        prevSong,
        audioRef,
        volume,
        setVolume,
        currentSongIndex,
        songList,
        setSongList,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

export default PlayProvider;

export const usePlayer = () => {
  const context = useContext(PlayContext);
  if (!context) throw new Error("usePlayer must be used inside PlayProvider");
  return context;
};