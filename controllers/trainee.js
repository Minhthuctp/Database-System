const Person = require("../models/trainee").Person;
const Trainee = require("../models/trainee").Trainee;

const e = require("express");
const path = require("path");
const sequelize = require("../util/database");
const Sequelize = require("sequelize");

exports.postaddTrainee = (req, res, next) => {
  const SSN = req.body.SSN;
  const Fname = req.body.Fname;
  const Lname = req.body.Lname;
  const address = req.body.address;
  const phone = req.body.phone;
  const DoB = req.body.DoB;
  const photo = req.body.photo;
  if (req.body.company_ID == "") req.body.company_ID = null;
  const company_id = req.body.company_ID;
  const allcokiee = req.get("Cookie").split(";");
  let name = "";
  allcokiee.forEach((cookiee) => {
    if (cookiee.trim().split("=")[0] == "Fullname")
      name = cookiee.trim().split("=")[1];
  });
  console.log(req.body);
  Person.create({
    SSN: SSN,
    Fname: Fname,
    Lname: Lname,
    address: address,
    phone: phone,
  }) //.catch((err) => console.log(err));
    .then(() => {
      Trainee.create({
        SSN: SSN,
        DoB: DoB,
        photo: photo,
        company_id: company_id,
      })
        .then(() => res.render("addtrainee.ejs", { check: "1", name: name }))
        .catch((err) => {
          console.log(err);
          Person.destroy({ where: { SSN: SSN } }).then(() => {
            res.render("addtrainee.ejs", { check: "0", name: name });
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.render("addtrainee.ejs", { check: "0", name: name });
    });
};

exports.serchTrainee = (req, res, next) => {
  const allcokiee = req.get("Cookie").split(";");
  let name = "";
  allcokiee.forEach((cookiee) => {
    if (cookiee.trim().split("=")[0] == "Fullname")
      name = cookiee.trim().split("=")[1];
  });
  if (req.body.fullname != undefined) {
    const [FFname, FLname] = req.body.fullname.split(" ");
    Person.findAll({
      where: {
        Fname: Sequelize.fn("lower", FFname),
        Lname: Sequelize.fn("lower", FLname),
      },
    })
      .then((trainees) => {
        res.render("searchtrainee.ejs", {
          userData: trainees,
          name: name,
        });
      })
      .catch((err) => console.log(err));
  } else {
    res.render("searchtrainee.ejs", {
      userData: "",
      name: name,
    });
  }
};

exports.getTraineeInformation = (req, res, next) => {
  const allcokiee = req.get("Cookie").split(";");
  let name = "";
  allcokiee.forEach((cookiee) => {
    if (cookiee.trim().split("=")[0] == "Fullname")
      name = cookiee.trim().split("=")[1];
  });
  const SSN = req.query.SSN;
  sequelize
    .query("CALL information_trainee(:SSN_trainee)", {
      replacements: { SSN_trainee: SSN },
    })
    .then((trainee) => {
      res.render("info_trainee.ejs", { user: trainee[0], name: name });
    });
};

exports.getResult = (req, res, next) => {
  const allcokiee = req.get("Cookie").split(";");
  let name = "";
  allcokiee.forEach((cookiee) => {
    if (cookiee.trim().split("=")[0] == "Fullname")
      name = cookiee.trim().split("=")[1];
  });
  if (req.body.SSN != undefined && req.body.Season != undefined) {
    const SSN = req.body.SSN;
    const Syear = req.body.Season;
    sequelize
      .query("CALL print_result(:SSN_trainee,:Syear)", {
        replacements: { SSN_trainee: SSN, Syear: Syear },
      })
      .then((results) => {
        res.render("resulttrainee.ejs", { season_result: results, name: name });
      })
      .catch((err) => console.log(err));
  } else {
    res.render("resulttrainee.ejs", { season_result: "", name: name });
  }
};
