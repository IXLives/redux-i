import './App.css'
import React from 'react'
import Balances from './Balances'
import Deposit from './Deposit'
import Withdrawal from './Withdrawal'

class App extends React.Component {
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

export default App;
