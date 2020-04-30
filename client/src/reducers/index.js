import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import menu from './menu';
import user from './user';
import userChats from './chats';

export default combineReducers({
  form: formReducer,
  menu,
  user,
  userChats,
});
