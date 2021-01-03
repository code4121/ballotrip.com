// src/components/InboxScreen.js

import React from "react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";

import { PureInboxScreen } from "./InboxScreen";

import * as TicketListStories from "./TicketList.stories";

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tickets: TicketListStories.Default.args.tickets,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});
export const Error = Template.bind({});

Error.args = {
  error: "Something",
};

const InboxScreenStory = {
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "InboxScreen",
};

export default InboxScreenStory;
