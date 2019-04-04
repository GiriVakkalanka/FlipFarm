import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import itemPageReducer from './itemPageReducer';
import transactionPageReducer from './transactionPageReducer';
import inboxReducer from './inboxReducer';
import outboxReducer from './outboxReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  items: itemReducer,
  itemPage: itemPageReducer,
  transactionPage: transactionPageReducer,
  inbox: inboxReducer,
  outbox: outboxReducer,
  transactions: transactionReducer
});
