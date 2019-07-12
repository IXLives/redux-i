import "./App.css";
import React from "react";
import Balances from "./Balances";
import Deposit from "./Deposit";
import Withdraw from './Withdraw'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Balances />
        <Deposit />
      </div>
    );
  }
}

export default App;
