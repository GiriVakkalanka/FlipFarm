import React from 'react';

const DateChoiceItem = ({date, clickAction}) => {
  return (
    <div key={date}>
      {date.toString()}
      <button onClick={() => clickAction({date}) }>
        select
      </button>
    </div>
  )
}

export default DateChoiceItem;
