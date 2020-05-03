import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import menu from './menu';
import user from './user';
import userChats from './chats';
import userAuth from './user-auth';

export default combineReducers({
  form: formReducer,
  menu,
  user,
  userAuth,
  userChats,
});