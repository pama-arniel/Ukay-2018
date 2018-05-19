const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  province: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  price: {
    type: Number
  },
  description: {
    type: String,
    default: ''
  },
  comments: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Product', ProductSchema);
