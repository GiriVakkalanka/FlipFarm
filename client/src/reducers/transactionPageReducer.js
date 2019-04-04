import { LOAD_TRANSACTION_PAGE } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case LOAD_TRANSACTION_PAGE:
      return action.payload;
    default:
      return state;
  }
}
