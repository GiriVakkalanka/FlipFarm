const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = require('./Users');

const itemSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  name: String,
  description: String,
  dateCreated: Date,
  traded: { type: Boolean, default: false},
  _tradedTo: { type: Schema.Types.ObjectId, ref: 'User'},
  _tradedFor: { type: Schema.Types.ObjectId, ref: 'Item'},
  offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }]
});

mongoose.model('Item', itemSchema);
