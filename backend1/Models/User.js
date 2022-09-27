const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    index: true
  },
  password: {
    type: String
  },
  role: {
    type: String
  },

}, {
    collection: 'Users'
  })

module.exports = mongoose.model('User', userSchema)