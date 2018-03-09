let express = require('express');
let router = express.Router({ mergeParams: true });

//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

router.get('/', function(req, res) {
    res.send("Hello World! Welcome to landing page");
});

router.get("/task", function (req,res){
	Task.find({
		private: false,
		active: true,
	}, function (error, tasks){
		if (!error){
			res.json(tasks);
		}
	});
});

module.exports = router;            