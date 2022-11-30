import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import DetailsPopup from "./DetailsPopup";

describe("Details popup functionality", () => {
    it("Details component renders", () => {
      render(<DetailsPopup />);
      expect(screen.getByText(/Your Time/i)).toBeInTheDocument();
    });
  
  it('input field changes', () => {
    render(<DetailsPopup/>)
    const input = screen.getByPlaceholderText('Enter name')
    fireEvent.change(input, {target: {value: 'my name'}})
    expect(input.value).toBe('my name')
  })
  
  });
  