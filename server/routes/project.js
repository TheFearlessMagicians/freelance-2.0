let express = require('express');
let router = express.Router({ mergeParams: true });

//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

//Deep population:
const deepPopulate = (task) => {
	task.populate
}


router.get("/project", function(req, res) {
  Project.findOne({}, function(error, project) {
    if (error) {
      console.log(error)
    } else {
      Project.findOne({}, function(error,project) {
        if (error) {
          console.log(error);
        } else {
        	// project.deepPopulate('tasks', function(error, project){
        	// 	if (error){
        	// 		console.log(error);
        	// 	} else {
        	// 		res.send(project);
        	// 	}
        	// });
        }
      }).populate('tasks').exec(function(error, project) {
        if (error) {
          console.log(error)
        } else {

          res.json(project);
        }
      });
    }
  });
});

module.exports = router;