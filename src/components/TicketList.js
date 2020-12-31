import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";

export const TICKETLIST_KEYS = {
  testid: "ticket-list",
};

const TicketList = ({ loading, tickets, onPinTicket, onArchiveTicket }) => {
  const events = {
    onPinTicket,
    onArchiveTicket,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    if (loading) {
      return (
        <div className="list-items">
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
        </div>
      );
    }
  }

  if (tickets.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tickets</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const ticketsInOrder = [
    ...tickets.filter((t) => t.state === "TICKET_PINNED"),
    ...tickets.filter((t) => t.state !== "TICKET_PINNED"),
  ];

  return (
    <div className="list-items">
      {ticketsInOrder.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} {...events} />
      ))}
    </div>
  );
};

export default TicketList;

TicketList.propTypes = {
  loading: PropTypes.bool,
  tickets: PropTypes.arrayOf(Ticket.propTypes.ticket).isRequired,
  onPinTicket: PropTypes.func,
  onArchiveTicket: PropTypes.func,
};

TicketList.defaultProps = {
  loading: false,
};
