const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('Item');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/submit_offer', requireLogin, async (req, res) => {
    console.log(req.body);
    //const offer = new Offer({ });
    res.send('route works');
  });
}


//include offer model and offer routes in index.js
//add submitted offer to item
//add submitted offer to sending user
//add received offer to receiving user
