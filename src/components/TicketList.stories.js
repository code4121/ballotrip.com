import React from "react";

import TicketList from "./TicketList";
import * as TicketStories from "./Ticket.stories";

const Template = (args) => <TicketList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in ticket.stories.js.
  tickets: [
    { ...TicketStories.Default.args.ticket, id: "1", title: "Ticket 1" },
    { ...TicketStories.Default.args.ticket, id: "2", title: "Ticket 2" },
    { ...TicketStories.Default.args.ticket, id: "3", title: "Ticket 3" },
    { ...TicketStories.Default.args.ticket, id: "4", title: "Ticket 4" },
    { ...TicketStories.Default.args.ticket, id: "5", title: "Ticket 5" },
    { ...TicketStories.Default.args.ticket, id: "6", title: "Ticket 6" },
  ],
};

export const WithPinnedTickets = Template.bind({});
WithPinnedTickets.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tickets: [
    ...Default.args.tickets.slice(0, 5),
    { id: "6", title: "Ticket 6 (pinned)", state: "TICKET_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tickets: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};

const TicketListStory = {
  component: TicketList,
  title: "TicketList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};
export default TicketListStory;
