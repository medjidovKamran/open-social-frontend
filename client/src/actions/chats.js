import apiClient from '../utils/axios-with-auth';
import {
  USERS_CHAT_DATA_LOADING,
  USERS_CHAT_DATA_LOADING_DATA_SUCCESS,
  USERS_CHAT_DATA_LOADING_DATA_FAILURE,
  USERS_CHAT_ADD_OWN_CHAT,
  USERS_CHAT_RESET_STATE,
  apiURL,
} from '../constants';

const userChatDataSuccess = payload => ({
  payload,
  type: USERS_CHAT_DATA_LOADING_DATA_SUCCESS,
});

const newChatDataSuccess = payload => ({
  payload,
  type: USERS_CHAT_ADD_OWN_CHAT,
});

const userChatDataFailure = error => ({
  error,
  type: USERS_CHAT_DATA_LOADING_DATA_FAILURE,
});

const userChatDataLoading = () => ({
  type: USERS_CHAT_DATA_LOADING,
});

const clearChatState = () => ({
  type: USERS_CHAT_RESET_STATE,
});

// export const getUsersChatData = (limit, offset) => async dispatch => {
//   dispatch(userChatDataLoading());
//   try {
//     const { data } = await apiClient.get(`${apiURL}/api/v1/chats?limit=${limit}&offset=${offset}`);
//     // /api/photos?count=${count}&start=${start}
//     // http://localhost:4000/api/v1/chats?limit=10&offset=0&isGlobal=false
//     dispatch(userChatDataSuccess({ data }));
//   } catch (error) {
//     dispatch(userChatDataFailure(error.message));
//   }
//   };

export const getUsersChatData = (limit, offset) => dispatch => {
  dispatch(userChatDataLoading());
  console.log('123');
  return apiClient
    .get(`${apiURL}/api/v1/chats?limit=${limit}&offset=${offset}`)
    .then(response => {
      const { data } = response;
      console.log('action data:', data);
      dispatch(userChatDataSuccess({ data }));
      // { data } === { data: data}
      return data;
    })
    .catch(error => {
      dispatch(userChatDataFailure(error.message));
    });
};

export const getUserChatData = id => async dispatch => {
  dispatch(userChatDataLoading());
  try {
    const { data } = await apiClient.get(`${apiURL}/api/v1/chats/${id}`);
    dispatch(userChatDataSuccess(data));
  } catch (error) {
    dispatch(userChatDataFailure(error.message));
  }
};

export const createChat = parameters => async dispatch => {
  dispatch(userChatDataLoading());
  try {
    const { data } = await apiClient.post(`${apiURL}/api/v1/chats`, parameters);
    dispatch(newChatDataSuccess(data));
  } catch (error) {
    dispatch(userChatDataFailure(error.message));
  }
};

export const resetChatState = () => dispatch => {
  dispatch(clearChatState());
};
