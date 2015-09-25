var express = require('express');
var scotchRouter = express.Router()
var scotchesController = require('../controllers/scotchesController')
var Scotch = require('../models/Scotch')

scotchRouter.use(function(req,res,next){
	console.log('Yayyyy, it connected!')
	next()
})

scotchRouter.route('/scotches')
	.get(scotchesController.index)
	.post(scotchesController.create)

scotchRouter.route('/scotches/:scotch_id')
	.get(scotchesController.show)
	.put(scotchesController.update)
	.delete(scotchesController.destroy)

module.exports = scotchRouter