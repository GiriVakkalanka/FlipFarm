import React, {Component} from 'react';
import PickyDateTime from 'react-picky-date-time';
import DateDisplay from './DateDisplay';

class DatePicker extends Component {
  // state = {
  //   showPickyDateTime: true,
  //   date: '01',
  //   month: '01',
  //   year: '2000',
  //   hour: '01',
  //   minute: '10',
  //   second: '40',
  //   meridiem: 'PM'
  // }
  constructor(props) {
    //fix meridiem and hour
    super(props);
    const fullDate = new Date();
    Date.prototype.getHours12 = function() {
      return (this.getHours() + 11) % 12 + 1;
    }
    Date.prototype.getMeridiem = function() {
     return this.getHours() > 12 ? 'PM' : 'AM';
    }
    this.state = {
      showPickyDateTime: true,
      date: fullDate.getDate().toString(),
      month: (fullDate.getMonth() + 1).toString(),
      year: fullDate.getFullYear().toString(),
      hour: fullDate.getHours12().toString(),
      minute: fullDate.getMinutes().toString(),
      second: fullDate.getSeconds().toString(),
      meridiem: fullDate.getMeridiem()
    }

  }

  onClose() {
    this.setState({showPickyDateTime: false});
  }

  onYearPicked(res) {
    const { year } = res;
    this.setState({ year: year });
  }

  onMonthPicked(res) {
    const { month, year } = res;
    this.setState({ year: year, month: month });
  }

  onDatePicked(res) {
    const { month, year, date } = res;
    this.setState({ month: month, year: year, date: date});
  }

  onResetDate(res) {
    const { date, month, year } = res;
    this.setState({ date: date, month: month, year: year });
  }

  onSecondChange(res) {
    this.setState({ second: res.value });
  }

  onMinuteChange(res) {
    this.setState({ minute: res.value });
  }

  onHourChange(res) {
    this.setState({ hour: res.value });
  }


  //documentation  res not res.value
  onMeridiemChanges(res) {
    this.setState({ meridiem: res.value });
  }

  onResetTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onClearTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onResetDefaultDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
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
      <div>
        <DateDisplay
          date = {date}
          month = {month}
          year = {year}
          hour = {hour}
          minute = {minute}
          second= {second}
          meridiem={meridiem}
        />
        <PickyDateTime
          size="s"
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
          onResetDefaultDate={res => this.onResetDefaultDate(res)}
        />
        <br/>
        <button onClick={() => this.props.addScheduleChoice(this.state)}>Add Date</button>

      </div>
    )
  }
}

export default DatePicker
