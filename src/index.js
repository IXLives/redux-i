import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/App";
import reducer from "./reducer";

// Custom redux logger!!
const logger = store => next => action => {
  console.log("Prev State", store.getState());
  console.log("Action", action);

  next(action);

  console.log("New State", store.getState());
};

const store = createStore(
  reducer,
  // compose multiple middleware flows together into one flow
  compose(
    // our custom middleware
    applyMiddleware(thunk, logger),
    // redux dev tools middleware
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
