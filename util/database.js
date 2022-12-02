const Sequelize = require("sequelize");

const sequelize = new Sequelize("assignment", "root", "Thuc1234", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
