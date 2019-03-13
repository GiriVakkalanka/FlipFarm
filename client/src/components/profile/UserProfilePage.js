import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemInventory from '../items/ItemInventory';
import OfferInbox from './OfferInbox';

const testObj = {
  'testKey' : 'testValue',
  'testKey2' : 'testValue2',
  'testKey3' : 'testValue3',
  'testKey4' : 'testValue4'
}

class UserProfilePage extends Component {

  componentDidMount(){
    this.props.getInbox();
  }

  render(){
    const { inbox } = this.props;
    console.log(inbox);
    return (
      <div>
        <div>
          Profile Page
        </div>
        <br/>
        <br/>
        <ItemInventory location="profilePage"/>
        <OfferInbox offerList={testObj}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    inbox: state.inbox
  };
}

export default connect(mapStateToProps, actions)(UserProfilePage);
