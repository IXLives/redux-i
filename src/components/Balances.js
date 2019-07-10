import React from "react";
import { connect } from "react-redux";

function Balances(props) {
  const { total, checking, savings } = props;

  return (
    <section>
      <h1 className="total">Available Balance: ${total}</h1>

      <ul className="balances">
        <li>Checking: ${checking}</li>
        <li>Savings: ${savings}</li>
      </ul>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    total: state.checking + state.savings,
    checking: state.checking,
    savings: state.savings
  };
};

export default connect(mapStateToProps)(Balances);
