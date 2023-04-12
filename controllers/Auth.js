const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  if (req.get("Cookie") == undefined) return res.redirect("/login");
  const allcokiee = req.get("Cookie").split(";");
  let name = "";
  allcokiee.forEach((cookiee) => {
    if (cookiee.trim().split("=")[0] == "Fullname")
      name = cookiee.trim().split("=")[1];
  });
  if (name == "Guest" || name == "") return res.redirect("/login");
  next();
};
