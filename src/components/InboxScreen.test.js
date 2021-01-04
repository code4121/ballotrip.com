// src/components/InboxScreen.js

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { connect } from "react-redux";
import * as TicketListStories from "./TicketList.stories";
import * as InboxScreenStories from "./InboxScreen.stories";
import InboxScreen from "./InboxScreen";
import { cleanup, render, screen } from "@testing-library/react";
const store = {
  getState: () => {
    return {
      tickets: TicketListStories.Default.args.tickets,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

describe("InboxScreen Tests", () => {
  describe("Default", () => {
    afterEach(cleanup);

    it("renders with context", async () => {
      render(
        <Provider store={store}>
          <InboxScreen Default />
        </Provider>
      );
      expect(await screen.getByTestId("inbox-screen")).toBeInTheDocument();

      // render(<TicketList loading />);
      // const lastTicketInput = div.querySelector(
      //   `.list-item:nth-child(1) input[value="Ticket 6 (pinned)"]`
      // );
    });
  });
});
