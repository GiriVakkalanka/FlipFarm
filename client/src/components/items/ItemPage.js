import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemInventory from './ItemInventory';
import * as actions from '../../actions/index';

class ItemPage extends Component {
  renderPage(){
    const { itemPage } = this.props;
    //console.log('item wanted' + itemPage.id);
    return (
      <div>
        <h1>{itemPage.itemTitle}</h1>
        <p>{itemPage.itemDescription}</p>
        <ItemInventory
          location="itemPage"
          itemWanted={itemPage.id}
        />
      </div>
    )
  }

  render(){
    return <div>{this.renderPage()}</div>;
  }
}

function mapStateToProps(state){
  return {itemPage: state.itemPage}
}

export default connect(mapStateToProps, actions)(ItemPage);
