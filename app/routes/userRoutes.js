var express = require('express');
var userRouter = express.Router()
var usersController = require('../controllers/usersController')
var User = require('../models/User')

userRouter.use(function(req,res,next){
	console.log('Yayyyy, it connected!')
	next()
})

userRouter.route('/users')
	.get(usersController.index)
	.post(usersController.create)

userRouter.route('/users/:user_id')
	.get(usersController.show)
	.put(usersController.update)
	.delete(usersController.destroy)

module.exports = userRouter