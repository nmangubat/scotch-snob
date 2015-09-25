var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema ({
	name: String,
	income_level: Number
})

UserSchema.pre('save', function(next){
	var user = this;
})

module.exports = mongoose.model('User', UserSchema)