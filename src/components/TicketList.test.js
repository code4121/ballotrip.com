import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

import { PureTicketList, TICKETLIST_KEYS } from "./TicketList";
import * as TicketListStories from "./TicketList.stories";

describe("TicketList Tests", () => {
  describe("with pinned tickets", () => {
    it("renders", async () => {
      const div = document.createElement("div");

      ReactDOM.render(
        <TicketListStories.WithPinnedTickets
          {...TicketListStories.WithPinnedTickets.args}
        />,
        div
      );
      // render(<TicketList loading />);
      const lastTicketInput = div.querySelector(
        `.list-item:nth-child(1) input[value="Ticket 6 (pinned)"]`
      );

      expect(lastTicketInput).not.toBe(null);

      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
