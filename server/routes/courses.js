const express = require("express");
const router = express.Router();
const Courses = require("../models/courses");

/* Add course details */
router.post("/add", (req, res) => {
  const courseDetails = new Courses(req.body);

  courseDetails.save((err, result) => {
    if (err) return console.log(err);
    res.send({ success: true, msg: "Course added successfully." });
  });
});

/* get course list */
router.get("/list", (req, res) => {
  Courses.find({ email: req.query.email }, (err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

/* get course details */
router.get("/:id", (req, res) => {
  Courses.findById({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    res.send({ success: true, data: result });
  });
});

/* Update course details */
router.put("/:id", (req, res) => {
  let conditions = { _id: req.params.id },
    update = { $set: req.body };
  Courses.update(conditions, update, (err, result) => {
    if (err) return console.log(err);

    res.send({ success: true, msg: "Course details updated successfully." });
  });
});

/* delete course details */
router.delete("/:id", (req, res) => {
  Courses.deleteOne({ _id: req.params.id }, (err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

/* search course list by name */
router.get("/", (req, res) => {
  Courses.find(
    { name: { $regex: ".*" + req.query.q + ".*" }, email: req.query.email },
    function(err, result) {
      if (err) return console.log(err);

      res.send(result);
    }
  );
});

module.exports = router;
