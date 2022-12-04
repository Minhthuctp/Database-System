const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Person = sequelize.define(
  "person",
  {
    SSN: {
      type: Sequelize.CHAR(12),
      primaryKey: true,
    },
    Fname: {
      type: Sequelize.STRING(40),
    },
    Lname: {
      type: Sequelize.STRING(40),
    },
    address: {
      type: Sequelize.STRING(100),
    },
    phone: {
      type: Sequelize.STRING(15),
      unique: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

const Trainee = sequelize.define(
  "trainee",
  {
    SSN: {
      type: Sequelize.CHAR(12),
      primaryKey: true,
    },
    DoB: {
      type: Sequelize.DATE,
    },
    photo: {
      type: Sequelize.STRING(200),
    },
    company_id: {
      type: Sequelize.CHAR(4),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
Trainee.hasOne(Person, { foreignKey: "SSN" });
Person.belongsTo(Trainee, { foreignKey: "SSN" });

module.exports = { Trainee, Person };
