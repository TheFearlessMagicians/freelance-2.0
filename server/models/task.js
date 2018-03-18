//Mongoose set up
let mongoose = require('mongoose');

//Deep population
let deepPopulate = require('mongoose-deep-populate')(mongoose);

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
		default: false,
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
		ref: "Task"
	}],
	parentTasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Task"
	}],
	contributors: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}],
	created: {
		type: Date,
		default: Date.now,
	}
});

taskSchema.plugin(deepPopulate, {
	whitelist: [
    'childTasks',
  	]
});

module.exports = mongoose.model("Task",taskSchema)