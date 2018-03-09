//Mongoose set up
let mongoose = require('mongoose');

//Schema
let projectSchema = new mongoose.Schema({
	name: String,
	tasks: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Task",
	},
	environment: String,
	completed: {
		type: Boolean,
		default: false,
	},
	description: String,
	blurb: String,
	tags: [String],
	creater: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	contributors: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	}],
	created: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Project",projectSchema)