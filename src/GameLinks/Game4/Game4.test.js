import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Game4 from "./Game4";

const Mocks = () => {
    return (
      <BrowserRouter>
        <Game4 />
      </BrowserRouter>
    );
  };

  describe('Game 4 page events', () => {

    it('home button link onClick', () => {
            render(<Mocks />);
            const homeButton = screen.getByRole('button', {name: 'Home'});
            fireEvent.click(homeButton);
            expect(screen.getByRole('link')).toHaveAttribute('href', '/');
          });

          it('Zoom button class changes applied', () => {
            render(<Mocks/>);
            const image = screen.getByTestId('zoom');
            const homeButton = screen.getByRole('button', {name: 'Zoom'});
            fireEvent.click(homeButton);
            expect(image).toHaveClass("zoom-in4 img")
          });

          it('Correct coordinates selected and character menu pops up', () => {
            const fn = jest.fn();
            render(<Mocks onClick={fn()}/>);
            const image = screen.getByAltText('game 4');
            fireEvent.click(image)
            expect(fn).toHaveBeenCalled();
            expect(screen.getAllByText(/Kratos/i)[0]).toBeInTheDocument();
          });
  })