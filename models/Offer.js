const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerSchema = new Schema({
  offerFrom: { type: Schema.Types.ObjectId, ref: 'users' },
  offerTo: { type: Schema.Types.ObjectId, ref: 'users'},
  itemOffered: { type: Schema.Types.ObjectId, ref: 'Item'},
  itemWanted: { type: Schema.Types.ObjectId, ref: 'Item'},
  offerDate: Date,
  offerAccepted: { type: Boolean, default: false},
  dateAccepted: Date
});

mongoose.model('Offer', offerSchema);
