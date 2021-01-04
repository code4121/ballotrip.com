// src/components/InboxScreen.js

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TicketList from "./TicketList";
export const INBOXSCREEN_KEYS = {
  testid: "inbox-screen",
};
export function PureInboxScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show" data-testid={INBOXSCREEN_KEYS.testid}>
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Ticketbox</span>
        </h1>
      </nav>
      <TicketList />
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureInboxScreen);
