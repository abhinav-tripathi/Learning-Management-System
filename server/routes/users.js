const express = require("express");
const router = express.Router();
const User = require("../models/users");

/* Register user */
router.post("/register", (req, res) => {
  User.countDocuments(
    { $or: [{ email: req.body.email }, { username: req.body.username }] },
    (err, count) => {
      if (count > 0) {
        res
          .status(200)
          .send({ error: true, msg: "Username/Email ID already registered" });
      } else {
        const user = new User(req.body);

        user.save((err, result) => {
          if (err) return console.log(err);
          res.send({ success: true });
        });
      }
    }
  );
});

/* Update user */
router.put("/:id", (req, res) => {
  let conditions = { _id: req.params.id },
    update = { $set: req.body };
  User.update(conditions, update, (err, result) => {
    if (err) return console.log(err);

    res.send(result);
  });
});

/* Login user */
router.post("/login", (req, res) => {
  User.countDocuments(req.body, (err, count) => {
    if (err) return console.log(err);

    if (count > 0) {
      res.send({ success: true });
    } else {
      res.status(200).send({ error: true, msg: "Authentication failed" });
    }
  });
});

module.exports = router;
