const Person = require("../models/trainee");
const Trainee = require("../models/trainee");

exports.postaddTrainee = async (req, res, next) => {
  const SSN = req.body.SSN;
  const Fname = req.body.Fname;
  const Lname = req.body.Lname;
  const address = req.body.address;
  const phone = req.body.phone;
  const DoB = req.body.DoB;
  const photo = req.body.photo;
  const company_id = req.body.company_ID;
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
      });
    })
    .catch((err) => console.log(err));
};
