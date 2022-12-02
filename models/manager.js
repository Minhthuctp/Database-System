const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Manager = sequelize.define(
  "Manager",
  {
    username: {
      type: Sequelize.STRING(100),
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Manager;
