import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import Ticket, { TICKET_KEYS } from "./Ticket";
import { Pinned } from "./Ticket.stories";

describe("Ticket Tests", () => {
  describe("default with empty ticket", () => {
    it("renders", async () => {
      // render(<Ticket ticket />);
      // expect(await screen.findByTestId(TICKET_KEYS.testid)).toBeInTheDocument();
      const div = document.createElement("div");

      ReactDOM.render(<Pinned {...Pinned.args} />, div);
      const input = div.querySelector(
        `.list-item:nth-child(1) input[value="Test Ticket"]`
      );
      expect(input).not.toBe(null);
    });
  });
});
