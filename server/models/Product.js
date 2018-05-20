const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const random = require('mongoose-simple-random');

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
ProductSchema.plugin(random);

module.exports = mongoose.model('Product', ProductSchema);
