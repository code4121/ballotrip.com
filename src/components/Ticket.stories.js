import React from "react";
import Ticket from "./Ticket";

const Template = (args) => <Ticket {...args} />;

export const Default = Template.bind({});

Default.args = {
  ticket: {
    id: "1",
    title: "Test Ticket",
    state: "TICKET_INBOX",
    updatedAt: new Date(2020, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});

Pinned.args = {
  ticket: {
    ...Default.args.ticket,
    state: "TICKET_PINNED",
  },
};

export const Archived = Template.bind({});

Archived.args = {
  ticket: {
    ...Default.args.ticket,
    state: "TICKET_ARCHIVED",
  },
};

const TicketStory = { component: Ticket, title: "Ticket" };

export default TicketStory;
