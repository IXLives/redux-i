import "./App.css";
import React from "react";
import Balances from "./Balances";
import Deposit from "./Deposit";
import Withdrawal from "./Withdrawal";
import { getAccount } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.getAccount()
  }
  render() {
    return (
      <div className="app">
        <Balances />
        <Deposit />
        <Withdrawal />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAccount: getAccount
}

export default connect(null, mapDispatchToProps)(App);
