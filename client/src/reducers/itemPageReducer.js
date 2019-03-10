import { LOAD_ITEM_PAGE } from '../actions/types';

export default function(state = null, action){
  switch (action.type) {
    case LOAD_ITEM_PAGE:
      return action.payload;
    default:
      return state;
  }
}
