import apiClient from '../utils/axios-with-auth';
import {
	USERS_CHAT_DATA_LOADING,
	USERS_CHAT_DATA_LOADING_DATA_SUCCESS,
	USERS_CHAT_DATA_LOADING_DATA_FAILURE,
	USERS_CHAT_ADD_OWN_CHAT,
	USERS_CHAT_RESET_STATE,
	apiURL
} from '../constants';

const userChatDataSuccess = (payload) => ({
	payload,
	type: USERS_CHAT_DATA_LOADING_DATA_SUCCESS
});

const newChatDataSuccess = (payload) => ({
	payload,
	type: USERS_CHAT_ADD_OWN_CHAT
});

const userChatDataFailure = (error) => ({
	error,
	type: USERS_CHAT_DATA_LOADING_DATA_FAILURE
});

const userChatDataLoading = () => ({
	type: USERS_CHAT_DATA_LOADING
});

const clearChatState = () => ({
	type: USERS_CHAT_RESET_STATE
});

// eslint-disable-next-line consistent-return
export const getUsersChatData = ({ limit, offset }) => async (dispatch) => {
	dispatch(userChatDataLoading());
	try {
		const { data } = await apiClient.get(`${apiURL}/api/v1/chats`, {
			limit,
			offset
		});
		dispatch(userChatDataSuccess({ data }));

		return data;
	} catch (error) {
		dispatch(userChatDataFailure(error.message));
	}
};

export const getChatsWithParams = ({ search }) => async (dispatch) => {
	dispatch(userChatDataLoading({ search }));
	console.log(search);
	try {
		const data = await apiClient.get(`${apiURL}/api/v1/chats`, { search: search });
		dispatch(userChatDataSuccess(data));
	} catch (error) {
		dispatch(userChatDataFailure(error.message));
	}
};

export const getMessagesWithParams = ({ search }) => async (dispatch) => {
	dispatch(userChatDataLoading({ search }));
	try {
		const data = await apiClient.get(`${apiURL}/api/v1/messages?search=%${search}%`);
		dispatch(userChatDataSuccess(data));
	} catch (error) {
		dispatch(userChatDataFailure(error.message));
	}
};

export const createChat = (parameters) => async (dispatch) => {
	dispatch(userChatDataLoading());
	try {
		const { data } = await apiClient.post(`${apiURL}/api/v1/chats`, parameters);
		dispatch(newChatDataSuccess(data));
	} catch (error) {
		dispatch(userChatDataFailure(error.message));
	}
};

// eslint-disable-next-line unicorn/consistent-function-scoping
export const resetChatState = () => (dispatch) => {
	dispatch(clearChatState());
};
