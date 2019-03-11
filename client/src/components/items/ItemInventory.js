import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemCard from './ItemCard';

const ItemInventory = ({ user }) => {
  const renderInventory = () => {
    return _.map(user.inventory, item => {
      return (
        <ItemCard
          key={item._id}
          id={item._id}
          itemTitle = {item.name}
          itemDescription = {item.description}
          cardButtonAction = {() => console.log('offer this item')}
          cardButtonLabel = "Offer Item"
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
