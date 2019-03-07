import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class MarketplacePage extends Component {
  componentDidMount() {
    console.log('test component');
  }
  render(){
    return <div>Marketplace Page</div>;
  }
}

function mapStateToProps(state){
  return null;
}

export default connect(mapStateToProps, actions)(MarketplacePage);
