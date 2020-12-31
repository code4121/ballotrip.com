import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import TicketList, { TICKETLIST_KEYS } from "./TicketList";
import { WithPinnedTickets } from "./TicketList.stories";

describe("TicketList Tests", () => {
  describe("with pinned tasks", () => {
    it("renders", async () => {
      const div = document.createElement("div");

      ReactDOM.render(<WithPinnedTickets {...WithPinnedTickets.args} />, div);
      // render(<TicketList loading />);
      const lastTaskInput = div.querySelector(
        `.list-item:nth-child(1) input[value="Task 6 (pinned)"]`
      );

      expect(lastTaskInput).not.toBe(null);
      expect(
        await screen.findByTestId(TICKETLIST_KEYS.testid)
      ).toBeInTheDocument();

      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
