import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ItemInventory from '../items/ItemInventory';

class UserProfilePage extends Component {

  render(){
    return (
      <div>
        <div>
          Profile Page
        </div>
        <br/>
        <br/>
        <ItemInventory location="profilePage"/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {auth: state.auth};
}

export default connect(mapStateToProps, actions)(UserProfilePage);
