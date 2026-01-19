const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "carpool",     
  "postgres",        
  "postgres",        
  {
    host: "localhost",
    dialect: "postgres",
    logging: false    
  }
);

module.exports = sequelize;
