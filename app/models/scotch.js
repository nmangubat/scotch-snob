var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ScotchSchema = new Schema ({
	name: String,
	price_point: Number
})

ScotchSchema.pre('save', function(next){
	var scotch = this;
})

module.exports = mongoose.model('Scotch', ScotchSchema)