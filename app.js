const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const sequelize = require("./util/database");

const loginrouter = require("./routes/login");

const managerrouter = require("./routes/manager");

app.use(bodyParser.urlencoded({ extends: true }));

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(loginrouter);

app.use(managerrouter);

app.listen(3000);
