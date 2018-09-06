const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyAccountSchema = new Schema({
  name: String,
  contactNumber: String,
  POC: String,
  email:  String,
  createdAt: {type: Date, default: Date.now}
},
{
  versionKey: false //To disable version key from db data
});

module.exports = mongoose.model('companyList', companyAccountSchema);