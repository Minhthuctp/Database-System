const Sequelize = require("sequelize");

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize("assignment", username, password, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
