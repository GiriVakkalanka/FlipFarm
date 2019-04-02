import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemInventory from '../items/ItemInventory';
import OfferInbox from './OfferInbox';
import OfferOutbox from './OfferOutbox';
import TransactionList from '../transaction/TransactionList';

class UserProfilePage extends Component {

  componentDidMount(){
    this.props.getInbox();
    this.props.getOutbox();
    this.props.getTransactions();
  }

  render(){
    const { inbox, outbox, transactions } = this.props;
    console.log(inbox);
    return (
      <div>
        <div>
          Profile Page
        </div>
        <br/>
        <br/>
        <ItemInventory location="profilePage"/>
        <OfferInbox
          offerList={inbox}
          acceptAction={this.props.acceptOffer}
        />
        <OfferOutbox
          offerList={outbox}
        />
        <TransactionList transactions={transactions}/>
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
