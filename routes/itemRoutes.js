const mongoose = require('mongoose');
const Item = mongoose.model('Item');
//const Offer = mongoose.model('Offer');
const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

module.exports = app => {
  app.get('/api/get_available_items', async (req, res) => {
    const items = await Item.find({});
    res.send(items);
  });

  app.get('/api/get_user_items', requireLogin, async (req, res) => {
    const userItems = await Item.find({ _user: req.user.id })
    res.send(userItems);
  });

  app.post('/api/add_item', requireLogin, async (req, res) => {

    const { name, description } = req.body;
    console.log(req.body);

    const item = new Item({
      _user: req.user.id,
      name,
      description,
      dateCreated: Date.now()
    });

    //console.log(item);

    try {
      await item.save();
      res.send(item);
    } catch (err) {
      res.status(400).send(err);
    }
  });
}
