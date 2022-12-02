const path = require("path");
const express = require("express");
const router = express.Router();

const TraineeController = require("../controllers/trainee");

router.get("/home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});

router.get("/add-trainee", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "addtrainee.html"));
});

router.post("/add-trainee", TraineeController.postaddTrainee);

module.exports = router;
