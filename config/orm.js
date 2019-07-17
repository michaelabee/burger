var connection = require ('./connection.js');

module.exports = function (ORM) { 

selectAll = function (req, res) {
    connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
};

insertOne = function () {
    var query = connection.query(
        "INSERT INTO burgers SET ?",
        //add code for selecting where to insert burger here
        function(err, res) {
          if (err) throw err;
        }
      );
};

updateOne = function () {
    var query = connection.query(
      "UPDATE burgers SET ? WHERE ?",
      //add code for selecting where to update here
      function(err, res) {
        if (err) throw err;
        
      }
    ); 
};


//the below syntax closes the module.exports
};

