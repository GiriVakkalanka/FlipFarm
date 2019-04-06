import React, {Component} from 'react';
import PickyDateTime from 'react-picky-date-time';

class DatePicker extends Component {
  state = {
    showPickyDateTime: true,
    date: '01',
    month: '01',
    year: '2000',
    hour: '01',
    minute: '10',
    second: '40',
    meridiem: 'PM'
  }
  render() {
    const {
      showPickyDateTime,
      date,
      month,
      year,
      hour,
      minute,
      second,
      meridiem
    } = this.state;

    return (
      <PickyDateTime
        size="m"
        mode={1}
        show={showPickyDateTime}
        onClose={() => this.setState({ showPickyDateTime: false })}
        defaultTime={`${hour}:${minute}:${second} ${meridiem}`}
        defaultDate={`${month}/${date}/${year}`}
        onYearPicked={res => this.onYearPicked(res)}
        onMonthPicked={res => this.onMonthPicked(res)}
        onDatePicked={res => this.onDatePicked(res)}
        onResetDate={res => this.onResetDefaultDate(res)}
        onSecondChange={res => this.onSecondChange(res)}
        onMinuteChange={res => this.onMinuteChange(res)}
        onHourChange={res => this.onHourChange(res)}
        onMeridiemChanges={res => this.onMeridiemChanges(res)}
        onResetTime={res => this.onResetTime(res)}
        onClearTime={res => this.onClearTime(res)}
      />
    )
  }
}

export default DatePicker
