import React from 'react';
import _ from 'lodash';

const DateChoiceList = ({scheduleChoices}) => {

  const renderDateChoiceList = () => {
    return _.map(scheduleChoices, (choice) => {
      return (
        <div key={scheduleChoices.indexOf(choice)}>
          {choice.month}
          {choice.date}
          {choice.year}
          {choice.hour}
          {choice.minute}
          {choice.meridiem}
        </div>
      )
    });
  }
  return (
    <div>
    DateChoiceList
    {renderDateChoiceList()}
    </div>
  )

}

export default DateChoiceList;
