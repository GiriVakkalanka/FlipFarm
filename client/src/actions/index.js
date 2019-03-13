import axios from 'axios';
import {
  FETCH_USER,
  SUBMIT_ITEM,
  GET_ALL_ITEMS,
  LOAD_ITEM_PAGE,
  SUBMIT_OFFER,
  GET_INBOX } from './types';

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

export const submitOffer = (offer) => async dispatch => {
  console.log('submit offer called')
  //console.log('offer is ' + JSON.stringify(offer));
  const res = await axios.post('/api/submit_offer', offer);
  dispatch({ type: SUBMIT_OFFER, payload: res.data })
}

export const loadItemPage = pageInfo => {
  return { type: LOAD_ITEM_PAGE, payload: pageInfo};
}

export const getInbox = () => async dispatch => {
  const res = await axios.get('/api/get_offer_inbox');
  dispatch({type: GET_INBOX, payload: res.data});
}
