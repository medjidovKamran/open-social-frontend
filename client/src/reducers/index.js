import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import menu from './menu';
import user from './user';
import confirm from './confirm';

export default combineReducers({
  confirm,
  form: formReducer,
  menu,
  user,
});
