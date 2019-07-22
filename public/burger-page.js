//This put request to change the devoured state of the burger isn't currently working. It gives a 500 error about the id not being defined. 
//I'm unsure if the below code is to blame or if the put request in burger_controllers.js is causing the error. 

$(function() {
    $("#change-devoured").click(function(event) {
      console.log('clicked');
  
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/:" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#burger-button").click(function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();  
      var newBurger = {
        burger_name: $("#burger-name").val().trim(),
      };
      console.log('clicked');
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
