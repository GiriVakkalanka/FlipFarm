import { FETCH_USER, SUBMIT_ITEM } from '../actions/types';

export default function(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SUBMIT_ITEM:
      console.log('Items from back end' + action.payload);
      return action.payload;
    default:
      return state;
  }
}
