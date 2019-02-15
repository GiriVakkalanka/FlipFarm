const mongoose = require('mongoose');
//const Schema = mongoose.Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String
});

mongoose.model('users', userSchema);
