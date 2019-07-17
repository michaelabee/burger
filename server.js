var express = require('express');
var PORT = process.env.PORT || 8080;

var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var urlencode = bodyParser.urlencoded({ extended: true});

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

var db = require("./models");

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });




