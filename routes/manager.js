const path = require("path");
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/Auth");
const TraineeController = require("../controllers/trainee");
const MainController = require("../controllers/login");

router.get("/", MainController.getHome);

router.get("/addtrainee", AuthController.isAuth, (req, res, next) => {
  const allcokiee = req.get("Cookie").split(";");
  let name = "";
  allcokiee.forEach((cookiee) => {
    if (cookiee.trim().split("=")[0] == "Fullname")
      name = cookiee.trim().split("=")[1];
  });
  res.render("addtrainee.ejs", { name: name, check: "2" });
});

router.post(
  "/addtrainee",
  AuthController.isAuth,
  TraineeController.postaddTrainee
);

router.get(
  "/searchtrainee",
  AuthController.isAuth,
  TraineeController.serchTrainee
);

router.post(
  "/searchtrainee",
  AuthController.isAuth,
  TraineeController.serchTrainee
);

router.get(
  "/users/view",
  AuthController.isAuth,
  TraineeController.getTraineeInformation
);

router.get("/getresult", AuthController.isAuth, TraineeController.getResult);

router.post("/getresult", AuthController.isAuth, TraineeController.getResult);

module.exports = router;
