var User = require("../models/User")

function index(req, res){
	User.find(function(err,users){
		if(err) res.send(err)
		res.json(users)
	})
}

function create(req, res){
	var user = new User()
	user.name = req.body.name
	user.income = req.body.income

	user.save(function(err){
		if(err) return res.json({message: "computer says noooo"})
		
		res.json({message: "new user created!"})
	})
}


function show(req,res){
	User.findById(req.params.user_id, function(err, user){
		if(err) res.send(err)
		res.json(user)
	})
}

function update(req, res){
	User.findById(req.params.user_id, function(err, user){
		if(err) {
			res.send(err)
		}
		if(req.body.name){
			user.name = req.body.name
		}
		if(req.body.income){
			user.income = req.body.income
		}
		user.save(function(err){
			if(err){
				res.send(err)
			}
			res.json({message: "user updated"})
		})
	})
}

function destroy(req, res){
	User.remove({_id: req.params.user_id}, function(err, user){
		if(err){
			res.send(err)
		}
		res.json({message: "deleted"})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}




