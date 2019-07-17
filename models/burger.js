module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burger", {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Burgers;
  };
  