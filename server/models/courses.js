const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema(
  {
    name: String,
    level: String,
    topics: String,
    description: String,
    email: String,
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false //To disable version key from db data
  }
);

module.exports = mongoose.model("Courses", coursesSchema);
