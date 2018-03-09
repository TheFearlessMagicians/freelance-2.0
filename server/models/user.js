//Mongoose set up
let mongoose = require('mongoose');

//Schema
let userSchema = new mongoose.Schema({
	name: String,
	tasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Task",
	}],
	projects: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Project",
	}],
	created: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("User", userSchema);