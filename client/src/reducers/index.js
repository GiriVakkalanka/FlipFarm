import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import itemPageReducer from './itemPageReducer';
import inboxReducer from './inboxReducer';
import outboxReducer from './outboxReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  items: itemReducer,
  itemPage: itemPageReducer,
  inbox: inboxReducer,
  outbox: outboxReducer
});
