const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const Offer = mongoose.model('Offer');
const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

module.exports = app => {
  app.get('/api/get_items', async (req, res) => {
    const items = await Item.find({});
    res.send(items);
  });
}
