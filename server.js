var 
	express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	User = require('./app/models/User'),
	Scotch = require('./app/models/Scotch'),
	userRouter = require('./app/routes/userRoutes')
	scotchRouter = require('./app/routes/scotchRoutes');

mongoose.connect('localhost:27017/men_user_app')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api', apiRouter)

app.listen(9001)
console.log("server is running on port 9001")
