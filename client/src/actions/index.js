import axios from 'axios';
import { FETCH_USER, SUBMIT_ITEM, GET_ALL_ITEMS, LOAD_ITEM_PAGE } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitItem = (values) => async dispatch => {
  const res = await axios.post('/api/add_item', values);
  //console.log(res);

  dispatch({ type: SUBMIT_ITEM, payload: res.data });
};

export const getAllItems = () => async dispatch => {
  const res = await axios.get('/api/get_available_items');
  dispatch({ type: GET_ALL_ITEMS, payload: res.data});
};

export const loadItemPage = pageInfo => {
  return { type: LOAD_ITEM_PAGE, payload: pageInfo};
}
