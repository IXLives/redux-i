import React from 'react'
import { connect } from 'react-redux'
import { makeDeposit } from '../actions'

class Deposit extends React.Component {
	state =  {
		amount: 0,
		account: 'Checking'
	}
	
	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	depositMoney = (evt) => {
		evt.preventDefault()

		const { amount, account } = this.state
		this.props.deposit(amount, account)

		this.setState({
			amount: '',
		})
	}

	render() {
		const { total } = this.props
		const { amount, account } = this.state

		return (
			<section>
				<h2>Make a Deposit</h2>
				<h6>CURRENT TOTAL: ${total}</h6>

				<form onSubmit={this.depositMoney}>
					<input type="number" name="amount" placeholder="Amount in USD" value=
					{amount} onChange={this.handleChange} required />
					
					<span> to </span>
					
					<select name="account" value={account} onChange={this.handleChange}>
						<option value="checking">Checking</option>
						<option value="savings">Savings</option>
					</select>
					
					<br />

					<button type="submit">Deposit</button>
				</form>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		total: state.checking + state.savings
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		deposit: (amount, account) => dispatch(makeDeposit(amount, account))
// 	}
// } -- shorthand below

const mapDispatchToProps = {
	deposit: makeDeposit
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit)