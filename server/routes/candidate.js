const express = require("express");
const router = express.Router();
const Candidate = require("../models/company/candidate");
const Company = require("../models/company/companyAccount");

/* Add company details */
router.post("/add", (req, res) => {
  const candidateDetails = new Candidate(req.body);

  candidateDetails.save((err, result) => {
    if (err) return console.log(err);
    res.send({ success: true, msg: "Candidate added successfully." });
  });
});

/* get candidate list */
router.get("/list/:id", (req, res) => {
  Candidate.find({ companyId: req.params.id }, (err, candidateResult) => {
    Company.findById({ _id: req.params.id }, (err, companyDetails) => {
      if (err) return console.log(err);
      res.send({
        success: true,
        data: { candidateList: candidateResult, companyDetails: companyDetails }
      });
    });
  });
});

/* get candidate details */
router.get("/:id", (req, res) => {
  Candidate.findById({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    res.send({ success: true, data: result });
  });
});

/* Update candidate details */
router.put("/:id", (req, res) => {
  let conditions = { _id: req.params.id },
    update = { $set: req.body };
  Candidate.update(conditions, update, (err, result) => {
    if (err) return console.log(err);

    res.send({ success: true, msg: "Candidate details updated successfully." });
  });
});

/* delete candidate details */
router.delete("/:id", (req, res) => {
  Candidate.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    Candidate.find({ companyId: req.query.cid }, (err, candidateResult) => {
      if (err) return console.log(err);
      res.send(candidateResult);
    });
  });
});

/* search candidate list by name */
router.get("/", (req, res) => {
  Candidate.find({ name: { $regex: ".*" + req.query.q + ".*" } }, function(
    err,
    result
  ) {
    if (err) return console.log(err);

    res.send(result);
  });
});

module.exports = router;
