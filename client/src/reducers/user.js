import { SET_USER_MESSAGE, SET_USERS } from '../constants';

const initialState = {
  message: '',
  users: [
    {
      firstName: 'User 1',
      id: 1,
      usersImg:
        'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
    },
    {
      firstName: 'User 2',
      id: 2,
      usersImg:
        'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
    },
    {
      firstName: 'User 3',
      id: 3,
      usersImg:
        'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_MESSAGE:
      return { message: action.message };
    case SET_USERS:
      return { ...state, users: Array.from(action.users) };
    default:
      return state;
  }
};

export const setUsers = (firstName, id, usersImg) => ({
  payload: { firstName, id, usersImg },
  type: SET_USERS,
});
