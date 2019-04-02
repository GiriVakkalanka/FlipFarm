import { GET_INBOX, ACCEPT_OFFER } from '../actions/types';

export default function (state=[], action) {
  switch (action.type) {
    case GET_INBOX:
      return action.payload;
    case ACCEPT_OFFER:
      console.log('res arrived');
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
