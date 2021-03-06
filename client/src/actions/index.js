import axios from 'axios';
import {
  FETCH_USER,
  SUBMIT_ITEM,
  GET_ALL_ITEMS,
  LOAD_ITEM_PAGE,
  SUBMIT_OFFER,
  GET_INBOX,
  ACCEPT_OFFER,
  GET_OUTBOX,
  GET_TRANSACTIONS,
  LOAD_TRANSACTION_PAGE,
  SUBMIT_SCHEDULE_CHOICES,
  ADD_SCHEDULE_CHOICE,
  REMOVE_SCHEDULE_CHOICE,
  CLEAR_SCHEDULE_CHOICES
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateUser = (userInfo) => async dispatch => {
  const res = await axios.get('/api/update_user');
  dispatch({ type: FETCH_USER, payload: res.data});
}

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
  dispatch({ type: SUBMIT_OFFER, payload: res.data });
};

export const loadItemPage = pageInfo => {
  return { type: LOAD_ITEM_PAGE, payload: pageInfo};
};

export const loadTransactionPage = pageInfo => {
  return { type: LOAD_TRANSACTION_PAGE, payload: pageInfo};
};

export const getInbox = () => async dispatch => {
  const res = await axios.get('/api/get_offer_inbox');
  dispatch({type: GET_INBOX, payload: res.data});
};

export const getOutbox = () => async dispatch => {
  console.log('outbox called');
  const res = await axios.get('/api/get_offer_outbox');
  dispatch({type: GET_OUTBOX, payload: res.data});
};

export const acceptOffer = (offer) => async dispatch => {
  const res = await axios.post('/api/accept_offer', offer);
  //const transaction = await axios.post('/api/start_transaction', offer);
  dispatch({type: ACCEPT_OFFER, payload: res.data});
};

export const getTransactions = () => async dispatch => {
  const res = await axios.get('/api/get_transactions');
  dispatch({type: GET_TRANSACTIONS, payload: res.data});
}

export const submitScheduleChoices = (choices) => async dispatch => {
  console.log(choices);
  const res = await axios.post('/api/submit_schedule_choices', choices);
  dispatch({type: GET_TRANSACTIONS, payload: res.data});
}

export const chooseFromScheduleChoices = (choice) => async dispatch => {
  const res = await axios.post('/api/choose_from_schedule_choices', choice);
  dispatch({type: GET_TRANSACTIONS, payload: res.data});
}

export const addScheduleChoice = choice => {
  //console.log(choice);
  return { type: ADD_SCHEDULE_CHOICE, payload: choice };
}

export const removeScheduleChoice = choice => {
  return { type: REMOVE_SCHEDULE_CHOICE, payload: choice };
}

export const clearScheduleChoices = () => {
  return { type: CLEAR_SCHEDULE_CHOICES, payload: null };
}
