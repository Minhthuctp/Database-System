const Manager = require("../models/manager");

exports.postChecklogin = (req, res, next) => {
  Manager.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((manager) => {
      if (!manager) {
        //alert("Wrong username or password");
        res.redirect("/");
      } else {
        if (manager.password === req.body.password) {
          //alert("Successful");
          res.redirect("/home");
        } else {
          //alert("Wrong username or password");
          res.redirect("/");
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
