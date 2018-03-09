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
  },
]

const seedDB = () => {
  Project.remove({}, function(error) {
    if (!error) {
      Task.remove({}, function(error) {
        if (!error) {
          User.remove({}, function(error) {
            if (!error) {
              Project.create({
                name: "Anonymous Job Search",
                blurb: "Form a basic MVP working website for anonymous Job Search",
                description: "Change the industry! Make hiring accessible! Join us to make a basic MVP working website for anonymous Job Search",
                environment: "MERN Stack",
                tags: ["MERN stack", "HR Solution", "Employment accessibility"],
              }, function(error, project) {
                if (error) {
                  console.log(error);
                } else {
                  User.create({
                    name: "Paul Allen",
                  }, function(error, creater) {
                    if (error) {
                      console.log(error);
                    } else {
                      project.creater = creater._id;
                      project.save(function(error, project) {
                        if (error) {
                          console.log(error);
                        } else {
                          userData.forEach(function(user) {
                            User.create(user, function(error, user) {
                              if (error) {
                                console.log(error);
                              } else {
                                project.contributors.push(user._id);
                                project.save(
                                  function(error, project) {
                                    if (error) {
                                      console.log(error)
                                    } else {}
                                  });
                              }
                            });
                          });
                          Task.create({
                            name: "Create Landing Page",
                            description: "Create a landing page from mockup UI using HTML, CSS and JS",
                            active: false, //shouldn't be though
                            project: project._id,
                          }, function(error, taskMockUp) {
                            if (error) {
                              console.log(error);
                            } else {
                              Task.create({
                                name: "Design Mockup UI",
                                description: "Create mockup UI for the web application, that meets the spec.",
                                active: true, //shouldn't be though
                                project: project._id,
                              }, function(error, taskFrontEnd) {
                                if (error) {
                                  console.log(error);
                                } else {
                                  taskFrontEnd.childTasks.push(taskMockUp._id);
                                  taskFrontEnd.save();
                                  taskMockUp.parentTasks.push(taskFrontEnd._id);
                                  taskMockUp.save();
                                  project.tasks.push(taskFrontEnd._id);
                                  Task.create({
                                    name: "Code Frontend Logic",
                                    description: "Code frontend logic and client side interactions",
                                    project: project._id,
                                  }, function(error, frontEndLogic) {
                                    if (!error) {
                                      frontEndLogic.childTasks.push(taskMockUp._id);
                                      frontEndLogic.save();
                                      project.tasks.push(frontEndLogic._id);
                                      project.save();
                                      Task.create({
                                        name: "Backend API",
                                        description: "Make a backend Rest API with ExpressJS and MongoDB",
                                        active: true,
                                        project: project._id,
                                      }, function(error, api) {
                                        if (!error) {
                                          project.tasks.push(api._id);
                                          project.save();
                                          Task.create({
                                            name: "Setup DB",
                                            description: "Set up database using MongoDB and WiredTiger engine",
                                            active: true,
                                            project: project._id,
                                          }, function(error, db) {
                                            if (!error) {
                                              project.tasks.push(db._id);
                                              project.save();
                                            }
                                          })
                                        }
                                      });
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}
module.exports = seedDB;