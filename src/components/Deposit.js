import React from "react";
import { connect } from "react-redux";
import { makeDeposit } from "../actions";

class Deposit extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      account: "checking",
      description: ""
    };
  }

  handleChange = evt => {
    evt.preventDefault();

    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  depositMoney = evt => {
    evt.preventDefault();
    //destructuring state from form
    const { amount, account, description } = this.state;

    // calling the action creator
    this.props.makeDeposit(amount, account, description);

    // resetting the form after it submits
    this.setState({
      amount: "",
      description: ""
    });
  };

  render() {
    const { total } = this.props;
    const { amount, account, description } = this.state;

    return (
      <section>
        <h2>Make a Deposit</h2>
        <h6>CURRENT TOTAL: ${total}</h6>

        <form onSubmit={this.depositMoney}>
          <input
            type="number"
            name="amount"
            placeholder="Amount in USD"
            value={amount}
            onChange={this.handleChange}
            required
          />

          <span> to </span>

          <select name="account" value={account} onChange={this.handleChange}>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>

          <br />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
            required
          />

          <br />

          <button type="submit">Deposit</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.checking + state.savings
  };
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		makeDeposit: (amount, account) => dispatch(makeDeposit(amount, account))
// 	}
// }
// ---- same as this:
const mapDispatchToProps = {
  makeDeposit: makeDeposit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deposit);
