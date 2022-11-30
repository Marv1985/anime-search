import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Game3 from "./Game3";

const Mocks = () => {
    return (
      <BrowserRouter>
        <Game3 />
      </BrowserRouter>
    );
  };

  describe('Game 3 page events', () => {

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
            expect(image).toHaveClass("zoom-in")
          });

          it('Correct coordinates selected and character menu pops up', () => {
            const fn = jest.fn();
            render(<Mocks onClick={fn()}/>);
            const image = screen.getByAltText('game 3');
            fireEvent.click(image)
            expect(fn).toHaveBeenCalled();
            expect(screen.getAllByText(/Luigi/i)[0]).toBeInTheDocument();
          });
        
        
  })
