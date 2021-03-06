const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
require('util').inspect.defaultOptions.depth = null
const Item = mongoose.model('Item');
const User = mongoose.model('users');
const Offer = mongoose.model('Offer');
const Transaction = mongoose.model('Transaction');
const axios = require('axios');
const formurlencoded = require('form-urlencoded').default;


module.exports = app => {
  app.post('/api/submit_offer', requireLogin, async (req, res) => {
    //console.log(req.body);
    const { itemWanted, itemOffered } = req.body;
    const wantedItem = await Item.findOne({_id: itemWanted});
    offerTo = wantedItem._user
    const offer = new Offer({
      itemWanted,
      itemOffered,
      offerFrom: req.user.id,
      offerTo: wantedItem._user,
      offerDate: Date.now()
    });
    offer.save();

    const requestBody = {
      pickup_address: '1760 2ND AVE, NY, NY 10128',
      dropoff_address: '223 E 85TH ST, NY, NY 10028'
    }
    const encodedRequestBody = formurlencoded(requestBody);
    //const requestBody = {};
    const config = {

      auth: {
        username: '73a57e83-070e-4b95-9b14-a9154b0966eb',
        password: ''
      }
    }
    // const authentication = {
    //   auth: {
    //     username: '7dc694db-346a-4f4a-bfd0-ef3dedb0a2aa',
    //     password: ''
    //   }
    // }

    try {
      const testCall = await axios.post('https://api.postmates.com/v1/customers/cus_MCzCXsQspGsOjF/delivery_quotes', encodedRequestBody, config);
      console.log(testCall.data)
    } catch(err) {
      //console.log(err);
      console.log(err);
    }

    res.send(offer) ;

  });

  app.get('/api/get_offer_inbox', requireLogin, async (req, res) => {
    const inbox = await Offer.find({offerTo: req.user.id, offerAccepted:false}).populate('offerFrom').populate('itemOffered').populate('itemWanted');
    //console.log(receivedInbox);
    res.send(inbox);
  });

  app.post('/api/accept_offer', requireLogin, async (req, res) => {
    //console.log(req.body);
    const acceptedOffer = await Offer.findOneAndUpdate({_id: req.body.offerId}, {offerAccepted:true});
    const newInbox = await Offer.find({offerTo: req.user.id, offerAccepted:false}).populate('offerFrom').populate('itemOffered').populate('itemWanted');
    const offer = await Offer.findOne({_id: req.body.offerId});
    //const participants = await offer.populate('offerFrom').populate('offerTo');
    //console.log('participants' + participants);
    const transaction = new Transaction({
      startDate: Date.now(),
      offerUser:offer.offerFrom,
      acceptUser:offer.offerTo,
      acceptedOffer: offer
    });
    savedTransaction = transaction.save();
    //console.log(transaction);

    // const timeoutTest = () => {
    //   console.log('timeout test')
    // }

    // setTimeout(timeoutTest, 90000);

    // const checkTimeChoicesSent = async () => {
    //   const transactionToCheck = await Transaction.findOne({_id: savedTransaction._id});
    //   if (transactionToCheck.transactionStage === 'infoPending') {
    //     console.log('false');
    //     return false;
    //   } else if (transactionToCheck.transactionStage === 'timeChoicesSent') {
    //     console.log('true');
    //     return true;
    //   }
    //   return false;
    // }
    //
    // setTimeout(checkTimeChoicesSent, 120000);

    res.send(newInbox);
  });

  app.get('/api/get_offer_outbox', requireLogin, async (req, res) => {
    const outbox = await Offer.find({offerFrom: req.user.id, offerAccepted:false}).populate('offerTo').populate('itemOffered').populate('itemWanted');
    //console.log(outbox);
    res.send(outbox);
  })

}


//include offer model and offer routes in index.js
//add submitted offer to item
//add submitted offer to sending user
//add received offer to receiving user
