const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const User = mongoose.model('users');
const Offer = mongoose.model('Offer');

const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

module.exports = app => {
    app.post('/api/start_transaction', requireLogin, async (req, res) => {
      console.log(req.body);
	    res.send('hi');
    });
}
