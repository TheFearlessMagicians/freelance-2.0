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
		public: true,
		active: true,
	}, function (error, tasks){
		res.json(tasks);
	});
});

module.exports = router;            