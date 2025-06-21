import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import "./global.css";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Playlist from "./pages/playlist/Playlist";
import PlayProvider from "./context/PlayContext";

const App: React.FC = () => {
  return (
    <PlayProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </PlayProvider>
  );
};

export default App;
