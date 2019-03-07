const mongoose = require('mongoose');
//const Schema = mongoose.Schema
const { Schema } = mongoose;
const itemSchema = require('./Item');

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String,
  inventory: [itemSchema]
}, {usePushEach: true});

mongoose.model('users', userSchema);
