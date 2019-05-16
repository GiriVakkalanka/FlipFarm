const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = require('./Users');
const offerSchema = require('./Offer');

const transactionSchema = new Schema({
  startDate: Date,
  offerUser: {type: Schema.Types.ObjectId, ref: 'users'},
  acceptUser: {type: Schema.Types.ObjectId, ref: 'users'},
  offeredDates: [Date],
  chosenDate: Date,
  transactionCompleted: { type: Boolean, default: false},
  transactionSuccess: { type: Boolean, default: false},
  acceptedOffer: { type: Schema.Types.ObjectId, ref: 'Offer'},
  changeable: { type: Boolean, default: true},
  transactionStage: { type: String, enum: [
    'infoPending',
    'timeChoicesSent',
    'dateChosen',
    'dayOfTransaction',
    'ongoingTransaction',
    'transactionSuccess'
  ], default: 'infoPending'}

});

mongoose.model('Transaction', transactionSchema);
