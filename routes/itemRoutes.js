const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const User = mongoose.model('users');
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
    //console.log(req.body);

    const item = new Item({
      _user: req.user.id,
      name,
      description,
      dateCreated: Date.now()
    });

    //console.log('item is', item._doc);
    const updatedUser = await User.findOne({_id: req.user.id })
    //console.log('to be updated user is', updatedUser._doc);
    updatedUser.inventory.push(item);

    //console.log('updated user is', updatedUser);
    //console.log('updated user', updatedUser);


    try {
      await item.save();
      await updatedUser.save();
      //await updatedUser.save();
      //console.log(updatedUser);
      res.send(updatedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });
}
