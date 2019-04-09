import { ADD_SCHEDULE_CHOICE, REMOVE_SCHEDULE_CHOICE, CLEAR_SCHEDULE_CHOICES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_SCHEDULE_CHOICE:
      return [...state, action.payload];
    case REMOVE_SCHEDULE_CHOICE:
      const choices = [...state]
      for (let i=0; 1 < choices.length; i++){
        if (choices[i] === action.payload) {
          return [...choices.slice(0, i), ...choices.slice(i+1)];
        }
      }
      return state;
    case CLEAR_SCHEDULE_CHOICES:
      return [];
    default:
      return state;

  }
}
