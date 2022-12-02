const path = require("path");
const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});

router.post("/", loginController.postChecklogin);

module.exports = router;
