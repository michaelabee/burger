var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: true});

var express = require('express');
var handlebars = require('express-handlebars');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/burgers_controllers.js");

// app.get('/', function (req, res) {
//     res.render('index');
// });

app.use('/', routes);

module.exports = app;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


