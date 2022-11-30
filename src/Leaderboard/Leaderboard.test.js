import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import LeaderBoard from "/home/marv/the-odin-project/react-projects/anime-search/src/Leaderboard/LeaderBoard.js"

describe("Leaderboard popup functionality", () => {
    it("Leaderboard component renders", async () => {
      render(<LeaderBoard />);
      const board = screen.getByText(/LEADERBOARD/i)
      expect(board).toBeInTheDocument();
    });
  
})
  