import React from "react";
import { Provider } from "react-redux";

import store from "./lib/redux";
import logo from "./logo.svg";
import "./App.css";

import InboxScreen from "./components/InboxScreen";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  );
}

export default App;
