import { ADD_SCHEDULE_CHOICE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_SCHEDULE_CHOICE:
      return [...state, action.payload];
    default:
      return state;

  }
}
