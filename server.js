var 
	express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	User = require('./app/models/User'),
	Scotch = require('./app/models/Scotch'),
	apiRouter = require('./app/routes/userRoutes');

mongoose.connect('localhost:3000/men_user_app')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api', apiRouter)

// app.listen(8080)
// console.log("server is running on port 8080")

ls;dkjflksadf;lkj;kelklwefio;wejf;;aowifjsdlknvnjksfnksndflkjsdnfjlknsdkjfskldafnlkjasdnfljklsadjnfjkwelkjfnjnkjk