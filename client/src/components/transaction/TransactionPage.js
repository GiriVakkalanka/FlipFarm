import React, { Component } from 'react';
import { connect } from 'react-redux';
import TransactionList from './TransactionList';
import * as actions from '../../actions/index';
//set up transaction/id route
//basic information
//select 4 hour time window
//
//postmates scheduler
//tracker


class TransactionPage extends Component {

  componentDidMount(){
    this.props.getTransactions();
  }

  render() {
    const { transactions } = this.props;
    const uniqueTransactions = [...new Set(transactions)];
    console.log(uniqueTransactions);

    //console.log(transactions);
    return (
      <div><TransactionList transactions={uniqueTransactions}/></div>
    )
  }
}

function mapStateToProps(state){
  return { transactions: state.transactions }
}

export default connect(mapStateToProps, actions)(TransactionPage);
