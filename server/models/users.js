const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  createdAt: {type: Date, default: Date.now}
},
{
  versionKey: false //To disable version key from db data
});

module.exports = mongoose.model('Users', usersSchema);