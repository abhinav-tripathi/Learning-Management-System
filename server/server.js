const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const companyRouter = require("./routes/company");
const candidateRouter = require("./routes/candidate");
const coursesRouter = require("./routes/courses");
const sessionsRouter = require("./routes/session");

const port = 3000;

//Mongo DB connection
mongoose.connect(
  "mongodb://localhost:27017/LMSDb",
  { useNewUrlParser: true }
);

//DB connection check
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("db connected");
});

//create application/json parser
app.use(bodyParser.json());

//Allow other origin to access data
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

//API routes
app.get("/", (req, res) => res.send("LMS api control system!"));
app.use("/users", usersRouter);
app.use("/company", companyRouter);
app.use("/candidate", candidateRouter);
app.use("/course", coursesRouter);
app.use("/session", sessionsRouter);

//Error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
