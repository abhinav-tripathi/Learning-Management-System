const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema(
  {
    name: String,
    email: String,
    skills: String,
    contactNumber: String,
    relevantExperience: String,
    companyId: String,
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false //To disable version key from db data
  }
);

module.exports = mongoose.model("candidateList", candidateSchema);
