var orm = require('../config/orm.js');

module.exports = function() {
//code that calls the ORM functions using burger specific
// input for the ORM

};

var burger = {

    //update all of this to reflect burger 
    all: function(cb) {
      orm.all("", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", burger_name, devoured, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("cats", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("cats", condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;

  