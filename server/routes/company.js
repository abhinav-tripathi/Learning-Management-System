const express = require("express");
const router = express.Router();
const Company = require("../models/company/companyAccount");

/* Add company details */
router.post("/add", (req, res) => {
  const companyDetails = new Company(req.body);

  companyDetails.save((err, result) => {
    if (err) return console.log(err);
    res.send({ success: true, msg: "Company account added." });
  });
});

/* get companies list */
router.get("/list", (req, res) => {
  Company.find({ email: req.query.email }, (err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

/* get company details */
router.get("/:id", (req, res) => {
  Company.findById({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    res.send({ success: true, data: result });
  });
});

/* update company details */
router.put("/:id", (req, res) => {
  let conditions = { _id: req.params.id },
    update = { $set: req.body };

  Company.update(conditions, update, (err, result) => {
    if (err) return console.log(err);

    res.send({ success: true, msg: "Company details updated successfully." });
  });
});

/* delete company details */
router.delete("/:id", (req, res) => {
  Company.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    res.send({ success: true });
  });
});

/* search company list by name */
router.get("/", (req, res) => {
  Company.find(
    { name: { $regex: ".*" + req.query.q + ".*" }, email: req.query.email },
    function(err, result) {
      if (err) return console.log(err);

      res.send(result);
    }
  );
});

module.exports = router;
