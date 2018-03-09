//The Smooth Jazz
let express = require('express');
let app = express();
let router = require('express-router');

//Variables and Constants
const port = 8000;

//Models
let Project = require('./models/project');
let Task = require('./models/task');
let User = require('./models/user');

//BodyParser set up
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//Mongoose set up
mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/TechFairLaHack");

//Express Router
app.use(require("./routes/routes"));

//Seed
let seed = require('./seed/seed');
seed();

//Server
let server = app.listen(port, function() {
    console.log('Listening on port ' + port);
    console.log('Serving on local host');
});
app.set('isLocal', true);
