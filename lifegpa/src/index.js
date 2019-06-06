import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers/reducer";

import Title from "./components/Title";
import FriendsList from "./components/FriendsList";
import "./styles.css";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Title />
      <FriendsList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

