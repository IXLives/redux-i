import React from 'react'
import { connect } from 'react-redux'
import { makeWithdrawal } from '../actions'

class Withdraw extends React.Component {
	state =  {
		amount: 0,
		account: 'Checking',
		description: ''
	}
	
	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	withdrawMoney = (evt) => {
		evt.preventDefault()
		//destructuring state from form
		const { amount, account, description } = this.state

		//calling action handler
		this.props.makeWithdrawal(amount, account, description)
		
		//reset the form after submission
		this.setState({
			amount: '',
			account: 'checking',
			description: ''
		})
	}

	render() {
		const { total } = this.props
		const { amount, account, description } = this.state

		return (
			<section>
				<h2>Make a Withdrawal</h2>
				<h6>CURRENT TOTAL: ${total}</h6>

				<form onSubmit={this.withdrawMoney}>
					<input type="number" name="amount" placeholder="Amount in USD" value=
					{amount} onChange={this.handleChange} required />
					
					<span> to </span>
					
					<select name="account" value={account} onChange={this.handleChange}>
						<option value="checking">Checking</option>
						<option value="savings">Savings</option>
					</select>
					
					<br />

					<input type = 'text' name = 'description' placeholder = 'Description' value = {description} onChange = {this.handleChange} required />

					<br />

					<button type="submit">Withdraw</button>
				</form>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		total: state.checking + state.savings,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		makeDeposit: (amount, account) => dispatch(makeDeposit(amount, account))
// 	}
// }
// ---- same as this:
const mapDispatchToProps = {
	makeWithdrawal: makeWithdrawal,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Withdraw)
