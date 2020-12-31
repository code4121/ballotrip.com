import React from "react";
import { render, screen } from "@testing-library/react";
import Ticket, { TICKET_KEYS } from "./Ticket";

describe("Ticket Tests", () => {
  describe("default with empty ticket", () => {
    it("renders", async () => {
      render(<Ticket ticket />);
      expect(await screen.findByTestId(TICKET_KEYS.testid)).toBeInTheDocument();
    });
  });
});
