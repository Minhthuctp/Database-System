const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Person = sequelize.define(
  "PERSON",
  {
    SSN: {
      type: Sequelize.CHAR(12),
      primaryKey: true,
    },
    Fname: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    Lname: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING(100),
    },
    phone: {
      type: Sequelize.STRING(15),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Trainee = sequelize.define(
  "TRAINEE",
  {
    SSN: {
      type: Sequelize.CHAR(12),
      primaryKey: true,
    },
    DoB: {
      type: Sequelize.DATE,
    },
    photo: {
      type: Sequelize.STRING(100),
    },
    company_ID: {
      type: Sequelize.CHAR(4),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Trainee;
module.exports = Person;
