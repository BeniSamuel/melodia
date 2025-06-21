import { createContext, useContext, useState, ReactNode } from "react";
import { SongType } from "../types/song.type";

interface PlayerContextType {
  currentSong: SongType | null;
  isPlaying: boolean;
  setIsPlaying: (bool: boolean) => void;
  playSong: (song: SongType) => void;
}

const PlayContext = createContext<PlayerContextType | undefined>(undefined);

const PlayProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<SongType | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song: SongType) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <PlayContext.Provider value={{ currentSong, isPlaying, playSong, setIsPlaying }}>
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