import { SUCCESS_CONFIRM, FAIL_CONFIRM } from '../constants';
import { confirmUser } from '../services/service-api';
import { successConfirm, failConfirm } from '../actions/confirm';

const initialState = {
  confirmation: 0, // 0 - wait for confirmation, 1 - confirm, 2 - fail
  // isLoading: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SUCCESS_CONFIRM:
      return {
        confirmation: 1,
        // isLoading: false,
      };
    case FAIL_CONFIRM:
      return {
        confirmation: 2,
        // isLoading: false,
      };
    default:
      return state;
  }
};

const SUCCESS_CODE = 201; // 200

export const confirmThunk = (id, userKey) => dispatch => {
  confirmUser(+id, userKey)
    .then(response => {
      if (response.status === SUCCESS_CODE) {
        dispatch(successConfirm());
      } else {
        dispatch(failConfirm());
      }
    })
    .catch(() => {
      dispatch(failConfirm());
    });
};
