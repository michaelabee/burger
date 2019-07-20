var express = require('express');
var burgerModel = require('../models/burger.js');

var db = require("../models");
console.log(db.Burger);
var router = require('express').Router();

// Routes
// =============================================================

//GET route for finding all burgers
router.get("/", function(req,res) {
  db.Burger.findAll().then(function(dbburgers) {
    res.render("index", {burgers: dbburgers})
  })
})

  // POST route for saving a new burger. We can create a burger with the data in req.body
  router.post("/api/burgers", function(req, res) {
    // Write code here to create a new burger and save it to the database
    // and then res.json back the burger to the user
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    }).then(function(dbburgers) {
      res.json(dbburgers);
    })
  });

  // // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
  // // req.params.id
  // router.delete("/api/burgers/:id", function(req, res) {
  //   db.Burger.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbburgers) {
  //     res.json(dbburgers);
  //   })
  // });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      burger_name:req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbburgers){
      res.json(dbburgers);
    })
  });


  module.exports = router;