import { GET_OUTBOX } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case GET_OUTBOX:
      return action.payload;
    default:
      return state;
  }
}
