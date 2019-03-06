import { SUBMIT_ITEM } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case SUBMIT_ITEM:
      return action.payload
    default:
      return state;
  }
}
