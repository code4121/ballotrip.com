// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from "redux";

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  ARCHIVE_TICKET: "ARCHIVE_TICKET",
  PIN_TICKET: "PIN_TICKET",
};

// The action creators bundle actions with the data required to execute them
export const archiveTicket = (id) => ({ type: actions.ARCHIVE_TICKET, id });
export const pinTicket = (id) => ({ type: actions.PIN_TICKET, id });

// All our reducers simply change the state of a single ticket.
function ticketStateReducer(ticketState) {
  return (state, action) => {
    return {
      ...state,
      tickets: state.tickets.map((ticket) =>
        ticket.id === action.id ? { ...ticket, state: ticketState } : ticket
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TICKET:
      return ticketStateReducer("TICKET_ARCHIVED")(state, action);
    case actions.PIN_TICKET:
      return ticketStateReducer("TICKET_PINNED")(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTickets = [
  { id: "1", title: "Something", state: "TICKET_INBOX" },
  { id: "2", title: "Something more", state: "TICKET_INBOX" },
  { id: "3", title: "Something else", state: "TICKET_INBOX" },
  { id: "4", title: "Something again", state: "TICKET_INBOX" },
];

// We export the constructed redux store
export default createStore(reducer, { tickets: defaultTickets });
