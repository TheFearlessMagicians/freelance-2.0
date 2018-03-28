let express = require('express');
let router = express.Router({ mergeParams: true });

//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

const userError = { 
  "error": "user not found"
}

router.get("/users", function (req,res){
	User.find({}).lean().exec(function (error, users){
		if (error || users == null){
			res.send(userError);
		}
		else {
			res.json(users);
		}
	});
});

router.get("/user", function (req, res){
	if(req.query.id != null){
	    User.findById(req.query.id).lean().exec(function(error, user){
	        if (error || project == null){
	          res.send(userError);
	        } else {
	          res.json(user);
	        }
	    });
	} else {
	  res.send(userError);
	} 
});

module.exports = router;            