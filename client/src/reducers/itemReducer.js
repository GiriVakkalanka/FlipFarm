import { GET_ALL_ITEMS } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {

    case GET_ALL_ITEMS:
      //console.log('Get All Items API Response');
      return action.payload;

    default:
      return state;
  }
}
