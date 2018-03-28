let express = require('express');
let router = express.Router({ mergeParams: true });

//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

const taskError = { 
  "error": "Task not found"
}

router.get('/', function(req, res) {
    res.send("Hello World! Welcome to landing page");
});

router.get("/tasks", function (req,res){
	Task.find({}).lean().exec(function (error, tasks){
		if (error || tasks == null){
			res.send(taskError);
		}
		else {
			res.json(tasks);
		}
	});
});

router.get("/task", function (req, res){
	if(req.query.id != null){
	    Task.findById(req.query.id).lean().exec(function(error, task){
	        if (error || project == null){
	          res.send(taskError);
	        } else {
	          res.json(task);
	        }
	    });
	} else {
	  res.send(taskError);
	} 
});

module.exports = router;            