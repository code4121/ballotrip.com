import React from "react";
import PropTypes from "prop-types";

export const TICKET_KEYS = {
  testid: "ticket-list-item",
};

const Ticket = ({
  ticket: { id = "", title = "", state = null },
  onArchiveTicket,
  onPinTicket,
}) => (
  <div className="list-item" data-testid={TICKET_KEYS.testid}>
    <label className="checkbox">
      <input
        type="checkbox"
        defaultChecked={state === "TASK_ARCHIVED"}
        disabled={true}
        name="checked"
      />
      <span className="checkbox-custom" onClick={() => onArchiveTicket(id)} />
    </label>
    <div className="title">
      <input
        type="text"
        value={title}
        readOnly={true}
        placeholder="Input title"
      />
    </div>
    <div className="actions" onClick={(event) => event.stopPropagation()}>
      {state !== "TASK_ARCHIVED" && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={() => onPinTicket(id)}>
          <span className={`icon-star`} />
        </a>
      )}
    </div>
  </div>
);

Ticket.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTicket: PropTypes.func,
  onPinTicket: PropTypes.func,
};
export default Ticket;
