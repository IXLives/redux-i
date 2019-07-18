import "./App.css";
import React from "react";
import {Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'
import Login from './Login'

class App extends React.Component {
	render() {
		return (
			<div className = 'app'>
				<PrivateRoute exact path = '/' component ={
					Dashboard
				} />
				<Route exact path = '/login' component = {
					Login
				} />
			</div>
		)
	}
}

// first param is mapStateToProps
export default App