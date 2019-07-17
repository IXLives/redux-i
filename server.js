const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const authData = {
	username: 'user',
	password: 'pass',
	token: 'ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98',
}

const data = {
	checking: 1500,
	savings: 5000,
	accountActivity: [
		'Mon Jul 15 2019 13:13:08 GMT-0400 (EDT), Our first paycheck, 1500',
		'Mon Jul 15 2019 13:13:08 GMT-0400 (EDT), This is a test deposit, 3000',
		'Mon Jul 15 2019 13:13:08 GMT-0400 (EDT), This is another test deposit, 2000',
	],
}

const app = express()
const port = process.env.PORT ||  8080

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
	const { authorization } = req.headers

	if (!authorization) {
		return res.status(403).send({
			message: 'You must be logged in to do that!',
		})
	}

	const token = authorization.replace(/bearer\s/i, '')

	if (token !== authData.token) {
		return res.status(403).send({
			message: 'Invalid authorization token!',
		})
	}

	// simulate a longer network request
	setTimeout(() => {
		res.send(data)
	}, 1000)
})

app.post('/login', (req, res, next) => {
	const { username, password } = req.body

	if (!username || !password) {
		return next(new Error('Need a username and a password!'))
	}

	if (username !== authData.username || password !== authData.password) {
		return res.status(401).send({
			message: 'Invalid username or password!',
		})
	}

	// simulate a longer network request
	setTimeout(() => {
		res.send({
			token: authData.token,
		})
	}, 1000)
})

app.use((req, res, next) => {
	res.status(404).send({
		message: 'Page Not Found',
	})
})

app.use((err, req, res, next) => {
	res.status(400).send({
		message: err.message || err,
	})
})

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`)
})