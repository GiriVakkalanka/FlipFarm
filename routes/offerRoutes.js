const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('Item');
const User = mongoose.model('users');
const Offer = mongoose.model('Offer');
const Transaction = mongoose.model('Transaction');

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
    //console.log(offer._doc)
    res.send(offer) ;
    // const submittedOfferItems = Offer.find({offerFrom: req.user.id}).populate('itemWanted');
    // console.log(JSON.stringify(submittedOfferItems));
    //res.send('hi');
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
    transaction.save();
    console.log(transaction);

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
