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


class TransactionBox extends Component {

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

export default connect(mapStateToProps, actions)(TransactionBox);

//Create button to go to individualTransaction TransactionPage
//Create routes to go to individual TransactionPage
//Make TransactionPage by creating reducer for current transaction page and actions to route to page.
//create alternate user account to simulate making an offer
//Create dummy button to simulate submission of date choices on acceptor side and
//waiting for submission of chioces on offerer side
//Create action creators to attach to dummy button
//advance transaction from pen
