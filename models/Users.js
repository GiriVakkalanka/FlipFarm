const mongoose = require('mongoose');
//const Schema = mongoose.Schema
const { Schema } = mongoose;
const itemSchema = require('./Item');

const userSchema = new Schema({
  googleId: String,
  name: { type: String, default: ''},
  credits: { type: Number, default: 0 },
  addressOne: { type: String, default: ''},
  addressTwo: { type: String, default: ''},
  city: { type: String, default: ''},
  state: { type: String, default: ''},
  zip: { type: String, default: ''},
  phone: { type: String, default: ''},
  inventory: [itemSchema]
}, {usePushEach: true});

mongoose.model('users', userSchema);
