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
      let transactionId;

      for (choice of choices) {
        if (choice.date) {
          const fixedMonth = (parseInt(choice.month) - 1).toString();
          const date = new Date(choice.year, fixedMonth, choice.date, choice.hour, choice.minute, choice.second );
          dates.push(date);
        } else {
          transactionId = choice;
        }
      }

      // console.log(dates);
      //  for (date of dates) {
      //    stringDate = date.toString()
      //    console.log(stringDate);
      //  }

      const transaction = await Transaction.findOne({_id: transactionId});
      transaction.transactionStage = 'timeChoicesSent';
      transaction.offeredDates = dates;
      const savedTransaction = await transaction.save();
      //console.log(transaction);
      res.send(transaction);
    });

    app.post('/api/choose_from_schedule_choices', requireLogin, async (req, res) => {
      const { date, transactionId } = req.body;
      const updatedTransaction = await Transaction.findOneAndUpdate({_id: transactionId}, {chosenDate:date, transactionStage:'dateChosen'}, {new: true});

      const calcTimeDifference = (chosenDate, forDelivery) => {
        const chosenDateObject = new Date(chosenDate);
        const currentDate = new Date();
        if(forDelivery) {
          return Math.abs(chosenDateObject - currentDate);
        } else {
          return Math.abs(chosenDateObject - currentDate) - 86400000;
        }
      }

      const changeableTime = calcTimeDifference(date, false);
      const transactionTime = calcTimeDifference(date, true);
      const requestBody = {
        'dropoff_address': '223 E 85TH ST, NY, NY, 10028',
        'pickup_address': '1760 2ND AVE, NY, NY, 10128',
      };
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const authentication = {
        auth: {
          username: '73a57e83-070e-4b95-9b14-a9154b0966eb',
          password: ''
        }
      }

      //setTimeout(async () => await Transaction.findOneAndUpdate({_id: transactionId}, {changeable: false}), changeableTime);
//       setTimeout(async () => await axios.post('https://api.postmates.com/v1/customers/cus_MCzCXsQspGsOjF/delivery_quotes', requestBody, auth: {username: '73a57e83-070e-4b95-9b14-a9154b0966eb
// ', password: ''}), changeableTime)
      const testCall = await axios.post('https://api.postmates.com/v1/customers/cus_MCzCXsQspGsOjF/delivery_quotes',
      requestBody, config, authentication);
      //console.log(testCall);
      res.send('hi')
    });
}
