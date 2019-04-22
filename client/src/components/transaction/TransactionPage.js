import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import DatePicker from '../datePicker/DatePicker';
import DateChoiceList from '../datePicker/DateChoiceList';
import DateChoiceItem from './DateChoiceItem';
import _ from 'lodash';

//choose between dateChoiceItem and dateChoiceList

class TransactionPage extends Component {
  renderPage() {
    //console.log(this.props.auth);
    const {transactionPage, submitScheduleChoices, scheduleChoices, addScheduleChoice} = this.props;
    let updatedScheduleChoices = scheduleChoices;
    updatedScheduleChoices = [...updatedScheduleChoices, transactionPage._id];
    //console.log(transactionPage);
    switch (transactionPage.transactionStage) {
      case 'infoPending':
        if (transactionPage.acceptUser === this.props.auth._id) {
          return (
            <div>
              {transactionPage._id}
              <br/>

              <br/>
              <DatePicker addScheduleChoice={addScheduleChoice} />
              <br/>
              <DateChoiceList scheduleChoices={scheduleChoices}/>
              <br/>
              <button onClick={() => submitScheduleChoices(updatedScheduleChoices)}>
                submit
              </button>
            </div>
          )
        } else {
          return <div>Waiting for the user to send dates. THey have 21 hrs left</div>
        }

      case 'timeChoicesSent':
        if (transactionPage.acceptUser === this.props._id) {
          return (
            <div>
              Waiting for user to choose a date
            </div>
          )
        } else {
          return _.map(transactionPage.offeredDates, (date) => {
            return (
              <div key={date}>
                <DateChoiceItem clickAction={this.props.chooseFromScheduleChoices} date={date}/>
              </div>
            )
          })
        }

      default:
        return <div>Default Case</div>
    }

  }

  render() {
    //console.log(this.props.transactionPage);
    return (
      <div>
        <div>TransactionPage</div>
        <div>{this.renderPage()}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    transactionPage: state.transactionPage,
    scheduleChoices: state.scheduleChoices,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(TransactionPage);
