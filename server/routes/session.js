const express = require("express");
const router = express.Router();
const Sessions = require("../models/session");
const Company = require("../models/company/companyAccount");
const Courses = require("../models/courses");
const Candidate = require("../models/company/candidate");

/* Add session details */
router.post("/add", (req, res) => {
  const sessionData = req.body;

  if (sessionData.accountId && sessionData.courseId) {
    Company.findById({ _id: sessionData.accountId }, (err, result) => {
      if (err) return console.log(err);
      sessionData["accountName"] = result.name;
      Courses.findById({ _id: sessionData.courseId }, (err, result) => {
        if (err) return console.log(err);
        sessionData["courseName"] = result.name;
        const sessionDetails = new Sessions(sessionData);
        sessionDetails.save((err, result) => {
          if (err) return console.log(err);
          res.send({ success: true, msg: "Session added successfully." });
        });
      });
    });
  }
});

/* get session list */
router.get("/list", (req, res) => {
  Sessions.find((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

/* get session details */
router.get("/:id", (req, res) => {
  Sessions.findById({ _id: req.params.id }, (err, sessionResult) => {
    if (err) return console.log(err);
    Candidate.find({ companyId: sessionResult.accountId }, (err, candidateResult) => {
      res.send({ success: true, data: sessionResult, candidateResult: candidateResult });
    });
  });
});

/* Update session details */
router.put("/:id", (req, res) => {
  let conditions = { _id: req.params.id },
    update = { $set: req.body };
  Sessions.update(conditions, update, (err, result) => {
    if (err) return console.log(err);

    res.send({ success: true, msg: "Session details updated successfully." });
  });
});

/* delete session details */
router.delete("/:id", (req, res) => {
  Sessions.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

/* search session list by name */
router.get("/", (req, res) => {
  Sessions.find(
    { session: { $regex: ".*" + req.query.q + ".*" }, email: req.query.email },
    function(err, result) {
      if (err) return console.log(err);

      res.send(result);
    }
  );
});

module.exports = router;
