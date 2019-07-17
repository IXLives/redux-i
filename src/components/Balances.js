import React from "react";
import { connect } from "react-redux";

function Balances(props) {
	const {
		isLoading,
		errorMessage,
		total,
		checking,
		savings,
		accountActivity,
	} = props

	if (isLoading) {
		return <p>Account Loading...</p>
	}

  return (
    <section>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <h1 className="total">Available Balance: ${total}</h1>

      <ul className="balances">
        <li>Checking: ${checking}</li>
        <li>Savings: ${savings}</li>
      </ul>)}



const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    total: state.checking + state.savings,
    checking: state.checking,
    savings: state.savings,
    accountActivity: state.accountActivity
  };
};

export default connect(mapStateToProps)(Balances);
