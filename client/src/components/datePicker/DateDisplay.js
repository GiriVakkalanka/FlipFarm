import React from 'react';

const DateDisplay = ({month, date, year, hour, minute, second, meridiem}) => {

  return (
    <div>
    {month}
    {date}
    {year}
    {hour}
    {minute}
    {second}
    {meridiem}
    </div>
  )
}

export default DateDisplay;
