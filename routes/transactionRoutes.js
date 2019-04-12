const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const User = mongoose.model('users');
const Offer = mongoose.model('Offer');
const Transaction = mongoose.model('Transaction');

const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

module.exports = app => {
    app.get('/api/get_transactions', requireLogin, async (req, res) => {
      const offeredTransactions = await Transaction.find().or([{offerUser:req.user.id}, {acceptUser:req.user.id}]);
      //const acceptedTransactions = await Transaction.find({acceptUser:req.user.id});
      //const transactions = [...offeredTransactions, ...acceptedTransactions];
      //console.log(transactions);
	    res.send(offeredTransactions);
    });

    app.post('/api/submit_schedule_choices', requireLogin, async (req, res) => {
      //save to transaction
      //alter transaction status

      const choices = req.body;
      //console.log(choices[0]);
      let dates = [];

      for (choice of choices) {
        const fixedMonth = (parseInt(choice.month) - 1).toString();
        const date = new Date(choice.year, fixedMonth, choice.date, choice.hour, choice.minute, choice.second );
        dates.push(date);
      }

      console.log(dates);
       for (date of dates) {
         stringDate = date.toString()
         console.log(stringDate);
       }
      res.send('Hi');
    });
}
