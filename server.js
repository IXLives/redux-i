const http = require('http')

const data = {
	checking: 1500,
	savings: 5000,
	accountActivity: [
		'Mon Jul 15 2019 13:13:08 GMT-0400 (EDT), Our first paycheck, 1500',
		'Mon Jul 15 2019 13:13:08 GMT-0400 (EDT), This is a test deposit, 3000',
		'Mon Jul 15 2019 13:13:08 GMT-0400 (EDT), This is another test deposit, 2000',
	],
}

const port = process.env.PORT ||  8080
const server = http.createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Content-Type', 'application/json')

	if (req.url === '/') {
		setTimeout(() => {
			res.end(JSON.stringify(data))	
		}, 1000)
	} else {
		res.statusCode = 404
		res.end(JSON.stringify({ message: 'Page Not Found' }))
	}
})

server.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`)
})