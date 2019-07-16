import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from './components/App'
import reducer from './reducer'

const store = createStore(
	reducer,
	// compose multiple middleware flows together into one flow
	compose(
		// our custom middleware
		applyMiddleware(thunk, logger),
		// redux dev tools middleware
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
	),
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
