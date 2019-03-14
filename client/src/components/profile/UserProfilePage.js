import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemInventory from '../items/ItemInventory';
import OfferInbox from './OfferInbox';
import OfferOutbox from './OfferOutbox';

class UserProfilePage extends Component {

  componentDidMount(){
    this.props.getInbox();
    this.props.getOutbox();
  }

  render(){
    const { inbox, outbox } = this.props;
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
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    inbox: state.inbox,
    outbox: state.outbox
  };
}

export default connect(mapStateToProps, actions)(UserProfilePage);
