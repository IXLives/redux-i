import React from 'react'
import { connect } from 'react-redux'
import { makeWithdrawal } from '../actions'

class Withdrawal extends React.Component {
	constructor() {
		super()
		this.state = {
			amount: '',
			account: 'checking',
			description: '',
		}
	}

	handleChange = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}

	withdrawalMoney = (evt) => {
		evt.preventDefault()

		const { amount, account, description } = this.state
		// calling the action creator
		this.props.makeWithdrawal(amount, account, description)

		// resetting the form after it submits
		this.setState({
			amount: '',
			description: '',
		})
	}

	render() {
		const { total } = this.props
		const { amount, account, description } = this.state

		return (
			<section>
				<h2>Make a Withdrawal</h2>
				<h6>CURRENT TOTAL: ${total}</h6>

				<form onSubmit={this.withdrawalMoney}>
					<input type="number" name="amount" placeholder="Amount in USD" value=
					{amount} onChange={this.handleChange} required />
					
					<span> from </span>
					
					<select name="account" value={account} onChange={this.handleChange}>
						<option value="checking">Checking</option>
						<option value="savings">Savings</option>
					</select>
					
					<br />

					<input type="text" name="description" placeholder="Description" value={description} onChange={this.handleChange} required />

					<br />

					<button type="submit">Withdrawal</button>
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

const mapDispatchToProps = {
	makeWithdrawal: makeWithdrawal,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Withdrawal)