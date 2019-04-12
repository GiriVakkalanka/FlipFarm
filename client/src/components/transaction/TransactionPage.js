import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import DatePicker from '../datePicker/DatePicker';
import DateChoiceList from '../datePicker/DateChoiceList';

class TransactionPage extends Component {
  renderPage() {
    //eventually put a switch statement switching over acceptor/offerer
    const {transactionPage, submitScheduleChoices, scheduleChoices, addScheduleChoice} = this.props;
    let updatedScheduleChoices = scheduleChoices;
    updatedScheduleChoices = [...updatedScheduleChoices, transactionPage._id]
    console.log(updatedScheduleChoices);
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
    scheduleChoices: state.scheduleChoices
  }
}

export default connect(mapStateToProps, actions)(TransactionPage);
