const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let menuSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  desc: {
    type: String
  },
  image: {
    type: String
  }

}, {
    collection: 'menuItems'
  })

module.exports = mongoose.model('Menu', menuSchema)