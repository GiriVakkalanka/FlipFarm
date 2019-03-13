import { GET_INBOX } from '../actions/types';

export default function (state={}, action) {
  switch (action.type) {
    case GET_INBOX:
      return action.payload;
    default:
      return state;
  }
}
