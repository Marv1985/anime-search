import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import GameSelection from "/home/marv/react-projects/anime-search/src/HomePage/GameSelection/GameSelection.js";

const Mocks = () => {
  return (
    <BrowserRouter>
      <GameSelection />
    </BrowserRouter>
  );
};

describe("Gameselection click elements tests", () => {
  it("leaderboard component renders onClick", () => {
    render(<Mocks />);
    const image = screen.getByAltText(/cup/i);
    fireEvent.click(image);
    expect(screen.getByText(/leaderboard/i)).toBeInTheDocument();
  });

  it("Game 1 link onClick", () => {
    render(<Mocks />);
    const image = screen.getByAltText(/game1/i);
    fireEvent.click(image);
    expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/game1");
  });

  it("Game 2 link onClick", () => {
    render(<Mocks />);
    const image = screen.getByAltText(/game2/i);
    fireEvent.click(image);
    expect(screen.getAllByRole("link")[1]).toHaveAttribute("href", "/game2");
  });

  it("Game 3 link onClick", () => {
    render(<Mocks />);
    const image = screen.getByAltText(/game3/i);
    fireEvent.click(image);
    expect(screen.getAllByRole("link")[2]).toHaveAttribute("href", "/game3");
  });

  it("Game 4 link onClick", () => {
    render(<Mocks />);
    const image = screen.getByAltText(/game4/i);
    fireEvent.click(image);
    expect(screen.getAllByRole("link")[3]).toHaveAttribute("href", "/game4");
  });
});
