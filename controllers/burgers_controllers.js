var express = require('express');
var burgerModel = require('../models/burger.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../views/index.handlebars'));
    });
};