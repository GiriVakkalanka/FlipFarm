import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import DatePicker from '../datePicker/DatePicker';

class TransactionPage extends Component {
  renderPage() {
    //eventually put a switch statement switching over acceptor/offerer
    const {transactionPage, submitScheduleChoices, scheduleChoices, addScheduleChoice} = this.props;
    const choice = {test: 'test'}
    return (
      <div>
        {transactionPage.acceptUser}
        <br/>

        <br/>
        <DatePicker addScheduleChoice={addScheduleChoice} />
        <br/>
        <button onClick={() => submitScheduleChoices(choice)}>
          submit
        </button>
      </div>
    )
  }

  render() {
    console.log(this.props.transactionPage);
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
