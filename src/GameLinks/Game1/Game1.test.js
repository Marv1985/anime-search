import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Game1 from "/home/marv/the-odin-project/react-projects/anime-search/src/GameLinks/Game1/Game1.js";

const Mocks = () => {
    return (
      <BrowserRouter>
        <Game1 />
      </BrowserRouter>
    );
  };

  describe('Game 1 page events', () => {

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

          it('Character menu pops up on image click', () => {
            render(<Mocks/>);
            const image = screen.getByAltText('game 1');
            fireEvent.click(image)
            expect(screen.getAllByText(/Mario/i)[0]).toBeInTheDocument();
          });
        
          it('Character menu dissapears after selection is made', () => {
            render(<Mocks/>);
            const image = screen.getByAltText('game 1');
            fireEvent.click(image)
            const comp = screen.getByTestId(/testmario/i);
            fireEvent.click(comp)
            expect(comp).not.toBeInTheDocument()
          });

  })

