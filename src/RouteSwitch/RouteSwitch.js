import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import GameSelection from "../HomePage/GameSelection/GameSelection";
import Game1 from "../GameLinks/Game1/Game1";
import Game2 from "../GameLinks/Game2/Game2";
import Game3 from "../GameLinks/Game3/Game3";
import Game4 from "../GameLinks/Game4/Game4";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameSelection />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
