let express = require('express');
let router = express.Router({ mergeParams: true });

//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

const projectError = { 
  "error": "Project not found"
}

//Deepopulation
// const deepPopulateTask = (task) => {
//   if (task.childTasks.length == 0){
//     return task;
//   }
//   for (let i = 0; i < task.childTasks.length; i++){
//     Task.findById(task.childTasks[i], function(error, found){
//       if (!error){
//         task.childTasks[i] = deepPopulateTask(found);
//       }
//     });
//   }
//   return task;
// }

router.get("/projects", function(req, res) {
  Project.find({}).populate('tasks').lean().exec(function (error, projects) {
      if (error) {
        console.log(error)
      } else {
        // for (let i = 0; i < project.tasks.length; i++) {
        //   project.tasks[i] = deepPopulateTask(project.tasks[i]);
        // }
        res.json(projects);
      }
  });
});

router.get("/project", function (req,res){
  if(req.query.id != null){
    Project.findById(req.query.id).populate('tasks').lean().exec(function (error, project){
        if (error || project == null){
          res.send(projectError);
        } else {
          res.json(project);
        }
    });
  } else {
    res.send(projectError);
  }
});

module.exports = router;