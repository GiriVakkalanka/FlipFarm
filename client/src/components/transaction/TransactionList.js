import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

const TransactionList = ({transactions, loadTransactionPage}) => {
  const renderTransactionList = () => {
    return _.map(transactions, transaction => {
      return (
        <div key={transaction._id}>
          <h1>{transaction._id}</h1>
          <Link to={`/transaction/${transaction._id}`}>
            <button onClick={() => loadTransactionPage(transaction)}>See more</button>
          </Link>

        </div>
      );
    });
  }
  return (
    <div>
      <h1>
        Transactions
      </h1>
      {renderTransactionList()}
    </div>
  );
}

export default TransactionList;
