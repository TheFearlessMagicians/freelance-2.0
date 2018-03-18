let express = require('express');
let router = express.Router({ mergeParams: true });

//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

const deepPopulateTask = (task) => {
  if (task.childTasks.length == 0)
    return task;
  for (let i = 0; i < task.childTasks.length; i++) {
    Task.findById(task.childTasks[i]).lean().exec(function(error, childTask) {
        if (error) {
            console.log(error);
        }
        else {
            task.childTasks[i] = deepPopulateTask(childTask);
            console.log("After recursive call", task);
        }
    });
  }
  console.log("Before return" , task);
  return task;
}

/*Deep population:*/
const deepPopulateProjectJSON = (projectJSON) => {
  for (let i = 0; i < projectJSON.tasks.length; i++) {
    projectJSON.tasks[i] = deepPopulateTask(projectJSON.tasks[i]);
  }
  return projectJSON;
}


router.get("/project", function(req, res) {
    Project.findOne({}, function (error, project) {
         if (error) {
             console.log(error);
         }
     }).populate('tasks').lean().exec(function (error, projectJSON) {
        if (!error) {
            res.send(deepPopulateProjectJSON(projectJSON));
        } else {
            console.log(error)
        }
    });
  });

module.exports = router;