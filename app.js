const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const sequelize = require("./util/database");

const loginrouter = require("./routes/login");

const managerrouter = require("./routes/manager");

const path = require("path");

app.set("view engine", "ejs");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extends: false }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

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
