var Scotch = require("../models/Scotch")

function index(req, res){
	Scotch.find(function(err,scotches){
		if(err) res.send(err)
		res.json(scotches)
	})
}

function create(req, res){
	var scotch = new Scotch()
	scotch.name = req.body.name
	scotch.income = req.body.income

	scotch.save(function(err){
		if(err) return res.json({message: "computer says noooo"})
		
		res.json({message: "new scotch created!"})
	})
}


function show(req,res){
	Scotch.findById(req.params.scotch_id, function(err, scotch){
		if(err) res.send(err)
		res.json(scotch)
	})
}

function update(req, res){
	Scotch.findById(req.params.scotch_id, function(err, scotch){
		if(err) {
			res.send(err)
		}
		if(req.body.name){
			scotch.name = req.body.name
		}
		if(req.body.price){
			scotch.price = req.body.price
		}
		scotch.save(function(err){
			if(err){
				res.send(err)
			}
			res.json({message: "scotch updated"})
		})
	})
}

function destroy(req, res){
	Scotch.remove({_id: req.params.scotch_id}, function(err, scotch){
		if(err){
			res.send(err)
		}
		res.json({message: "deleted scotch"})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}




