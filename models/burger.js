module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Burger;
  };
  
  //set default of devoured to false 