const Manager = require("../models/manager");

const jwt = require("jsonwebtoken");

exports.postChecklogin = (req, res, next) => {
  Manager.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((manager) => {
      if (!manager) {
        res.render("login.ejs", { warning: "Wrong username or password" });
      } else {
        if (manager.password === req.body.password) {
          res.setHeader("Set-Cookie", "Fullname=" + manager.Fullname);
          return res.redirect("/");
        } else {
          res.render("login.ejs", { warning: "Wrong username or password" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getLogout = (req, res, next) => {
  res.setHeader("Set-Cookie", "Fullname=Guest");
  res.redirect("/");
};

exports.getHome = (req, res, next) => {
  if (req.get("Cookie") == undefined)
    return res.render("home.ejs", { check: false, name: "Guest" });
  const allcokiee = req.get("Cookie").split(";");
  let name = "";
  allcokiee.forEach((cookiee) => {
    if (cookiee.trim().split("=")[0] == "Fullname")
      name = cookiee.trim().split("=")[1];
  });
  if (name == "Guest" || name == "") {
    return res.render("home.ejs", { check: false, name: "Guest" });
  }
  return res.render("home.ejs", {
    check: true,
    name: name,
  });
};
