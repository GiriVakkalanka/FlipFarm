const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('Item');
const User = mongoose.model('users');
const Offer = mongoose.model('Offer');

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

  app.get('/api/get_submitted_offers', requireLogin, async () => {
    //const submittedOffers = Offer.find({offerFrom: req.user.id}).populate('itemWanted');
  });
}


//include offer model and offer routes in index.js
//add submitted offer to item
//add submitted offer to sending user
//add received offer to receiving user
