import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemCard from './ItemCard';

const ItemInventory = ({ user, location, submitOffer, itemWanted }) => {

  const determineAction = () => {
    switch (location) {
      case 'itemPage':
        return submitOffer;
      case 'profilePage':
        return console.log('profilePage');
      default:
        return
    }
  }

  const determineLabel = () => {
    switch (location) {
      case 'itemPage':
        return 'Offer Item';
      case 'profilePage':
        return 'Edit Item';
      default:
        return 'Label';
    }
  }

  const renderInventory = () => {
    if(!user) {
      return <div>Nothing to see here</div>
    }
    return _.map(user.inventory, item => {
      return (
        <ItemCard
          key={item._id}
          id={item._id}
          itemTitle = {item.name}
          itemDescription = {item.description}
          cardButtonAction = {determineAction()}
          cardButtonLabel = {determineLabel()}
          location = {location}
          itemWanted={itemWanted}
        />
      )
    })
  }
  return <div>{renderInventory()}</div>
};

function mapStateToProps(state) {
  return { user:state.auth }
}

export default connect(mapStateToProps, actions)(ItemInventory);
