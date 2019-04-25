import React from 'react';

const DateChoiceItem = ({date, clickAction, transactionId}) => {
  const dateChoice = {transactionId, date}
  return (
    <div key={date}>
      {date.toString()}
      <button onClick={() => clickAction(dateChoice) }>
        select
      </button>
    </div>
  )
}

export default DateChoiceItem;
