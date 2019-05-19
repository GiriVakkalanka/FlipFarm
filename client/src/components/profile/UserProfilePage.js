import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemInventory from '../items/ItemInventory';
import OfferInbox from './OfferInbox';
import OfferOutbox from './OfferOutbox';
import TransactionList from '../transaction/TransactionList';
import InfoForm from './InfoForm';

class UserProfilePage extends Component {

  componentDidMount(){
    this.props.getInbox();
    this.props.getOutbox();
    this.props.getTransactions();
  }

  render(){
    const { auth, inbox, outbox, transactions, loadTransactionPage, infoFormValues } = this.props;

    const defaultInfoValues = auth ?
      {
        name: this.props.auth.name,
        addressOne: this.props.auth.addressOne,
        addressTwo: this.props.auth.addressTwo,
        city: this.props.auth.city,
        state: this.props.auth.state,
        zip: this.props.auth.zip,
        phone: this.props.auth.phone
      }
      :
      {
        name: "",
        addressOne: "",
        addressTwo: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
      }
    return (
      <div>
        <div>
          Profile Page
        </div>
        <br/>
        <InfoForm defaultInfoValues={defaultInfoValues}/>
        <br/>
        <ItemInventory location="profilePage"/>
        <OfferInbox
          offerList={inbox}
          acceptAction={this.props.acceptOffer}
        />
        <OfferOutbox
          offerList={outbox}
        />
        <TransactionList loadTransactionPage={loadTransactionPage} transactions={transactions}/>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    inbox: state.inbox,
    outbox: state.outbox,
    transactions: state.transactions
  };
}

export default connect(mapStateToProps, actions)(UserProfilePage);
