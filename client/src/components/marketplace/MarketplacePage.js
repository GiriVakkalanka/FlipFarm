import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemCard from '../items/ItemCard';
import _ from 'lodash';

class MarketplacePage extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  renderItemsList() {
    const { items } = this.props;
    return _.map(items, (item) => {
      return (
        <ItemCard
          key={item._id}
          itemTitle = {item.name}
          itemDescription = {item.description}
        />
      )
    })
  }

  render(){
    return <div>{this.renderItemsList()}</div>;
  }
}

function mapStateToProps(state){
  return { items: state.items };
}

export default connect(mapStateToProps, actions)(MarketplacePage);
