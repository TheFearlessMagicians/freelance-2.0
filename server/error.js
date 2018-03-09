//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

const error = (project) => {
  Task.create({
    description: "Create a landing page from mockup UI",
    private: false,
    active: true,
    name: "Create landing page",
    project: project._id,
  }, function(error, taskMockUp) {
    if (error) {
      console.log(error);
    } else {
      Task.create({
        description: "Translate mockup to front end code",
        private: false,
        active: true,
        name: "MockUp --> Front End Code",
        project: project._id,
      }, function(error, taskFrontEnd) {
        if (error) {
          console.log(error);
        } else {
          taskFrontEnd.childTasks.push(taskMockUp._id);
          taskFrontEnd.save();
          console.log(taskFrontEnd);
          // taskFrontEnd.update({
          //   $push: {
          //     childTasks: taskMockUp._id
          //   }
          // }, function(error, taskFrontEnd) {
          //   if (error) {
          //     console.log(error);
          //   } else {
          //     console.log(taskMockUp, taskFrontEnd);
          //   }
          // });
        }
      });
    }
  });
}

