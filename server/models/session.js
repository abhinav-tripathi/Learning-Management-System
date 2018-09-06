const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema(
  {
    session: String,
    accountId: String,
    accountName: String,
    courseId: String,
    courseName: String,
    candidateList: [String],
    startDate: Date,
    endDate: Date,
    email: String,
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false //To disable version key from db data
  }
);

module.exports = mongoose.model("Sessions", sessionSchema);
