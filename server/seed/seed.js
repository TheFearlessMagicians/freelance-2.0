//Mongoose
let mongoose = require('mongoose');

//Models
let Project = require('../models/project');
let Task = require('../models/task');
let User = require('../models/user');

userData = [{
    name: "Varun"
  },
  {
    name: "Wilson"
  },
  {
    name: "Hanif"
  }
]

function sketch(project) {
  Task.create({
    description: "Create a landing page from mockup UI",
    private: false,
    active: true, //shouldn't be though
    name: "Create landing page",
    project: project._id,
  }, function(error, taskMockUp) {
    if (error) {
      // console.log(error);
    } else {
      Task.create({
        description: "Translate mockup to front end code",
        private: false,
        active: true, //shouldn't be though
        name: "MockUp To Front End Code",
        project: project._id,
      }, function(error, taskFrontEnd) {
        // console.log(taskMockUp,taskFrontEnd);

        if (error) {
          // console.log(error);
        } else {
          taskFrontEnd.update({
            $push: {
              childTasks: taskMockUp._id
            }
          }, function(error, taskFrontEnd) {
            // console.log(taskMockUp,taskFrontEnd);

            if (error) {
              // console.log(error);
            } else {
              // console.log(taskMockUp,taskFrontEnd);

              taskMockUp.update({
                $push: {
                  parentTasks: taskFrontEnd._id,
                }
              }, function(error, taskMockUp) {
                if (error) {
                  // console.log(error);
                } else {
                  project.update({
                    $push: {
                      tasks: taskFrontEnd._id,
                    }
                  }, function(error, project) {
                    if (error) {
                      // console.log(error);

                    } else {
                      // console.log(project);
                    }
                  })
                }
              })
            }
          });
        }
      });
    }
  });
}

const seedDB = () => {
  Project.create({
    name: "Anonymous Job Search",
    blurb: "Form a basic MVP working website for anonymous Job Search",
    description: "Change the industry! Make hiring accessible! Join us to make a basic MVP working website for anonymous Job Search",
    environment: "MERN Stack",
    tags: ["MERN stack", "HR Solution", "Employment accessibility"],
  }, function(error, project) {
    if (error) {
      // console.log(error);
    } else {
      User.create({
        name: "Paul Allen",
      }, function(error, creater) {
        if (error) {
          // console.log(error);
        } else {
          project.creater = creater._id;
          project.save(function(error, project) {
            if (error) {
              // console.log(error);
            } else {
              userData.forEach(function(user) {
                User.create(user, function(error, user) {
                  if (error) {
                    // console.log(error);
                  } else {
                    project.update({
                      $push: {
                        contributors: user,
                      } }  ,    {safe: true, upsert: true},
                    function(error, project) {
                      if (error) {
                        // console.log(error)                      
                      } else {
                      	console.log(project);
                      }
                    })
                  }
                });
              });
              sketch(project);
            }
          });
        }
      });
    }
  });
}
module.exports = seedDB;