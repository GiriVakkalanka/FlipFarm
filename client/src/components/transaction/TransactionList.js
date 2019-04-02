import _ from 'lodash';
import React from 'react';

const TransactionList = ({transactions}) => {
  const renderTransactionList = () => {
    return _.map(transactions, transaction => {
      return (
        <div key={transaction._id}>
          <h1>{transaction._id}</h1>
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
