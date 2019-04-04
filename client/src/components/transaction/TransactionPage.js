import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class TransactionPage extends Component {

  render() {
    return <div>TransactionPage</div>;
  }
}

function mapStateToProps(state) {
  return {transactionPage: state.transactionPage}
}

export default connect(mapStateToProps, actions)(TransactionPage);
