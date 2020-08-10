import {
	USERS_CHAT_DATA_LOADING,
	USERS_CHAT_DATA_LOADING_DATA_SUCCESS,
	USERS_CHAT_DATA_LOADING_DATA_FAILURE,
	USERS_CHAT_ADD_OWN_CHAT,
	USERS_CHAT_RESET_STATE
} from '../constants';

const initialState = {
	data: [],
	error: '',
	isLoading: true,
	userOption: { id: '' }
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USERS_CHAT_DATA_LOADING_DATA_SUCCESS:
			return {
				...state,
				...action.payload,
				error: '',
				isLoading: false
			};
		case USERS_CHAT_DATA_LOADING:
			return { ...state };
		case USERS_CHAT_ADD_OWN_CHAT:
			return {
				...state,
				data: [ ...state.data, action.payload ],
				isLoading: false
			};
		case USERS_CHAT_DATA_LOADING_DATA_FAILURE:
			return { ...state, error: action.error, isLoading: false };
		case USERS_CHAT_RESET_STATE:
			return { ...state, data: [] };
		default:
			return state;
	}
};
