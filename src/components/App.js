import './App.css'
import React from 'react'
import { connect } from 'react-redux'
import Balances from './Balances'
import Deposit from './Deposit'
import Withdrawal from './Withdrawal'
import { getAccount } from '../actions'

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
		)
	}
}

const mapDispatchToProps = {
	getAccount,
}

// first param is mapStateToProps
export default connect(null, mapDispatchToProps)(App)
