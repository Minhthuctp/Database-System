const path = require("path");
const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");

router.get("/login", (req, res, next) => {
  res.render("login.ejs", { warning: "" });
});

router.post("/login", loginController.postChecklogin);

router.get("/logout", loginController.getLogout);

module.exports = router;
