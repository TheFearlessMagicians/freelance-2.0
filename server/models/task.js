//Mongoose set up
let mongoose = require('mongoose');

//Schema


let taskSchema = new mongoose.Schema({
	name: String,
	completed: {
		type: Boolean,
		default: false,
	},
	active: {
		type: Boolean,
		default: false,
	},
	private: {
		type: Boolean,
		default: true,
	},
	deadline: {
		type: Date,
	},
	description: String,
	validationInstructions: String,
	project: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Project",
	},
	childTasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Task",
	}],
	parentTasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Task",
	}],
	contributors: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}],
	created: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Task",taskSchema)