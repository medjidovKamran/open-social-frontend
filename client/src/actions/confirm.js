import { SUCCESS_CONFIRM, FAIL_CONFIRM } from '../constants';

export const successConfirm = () => {
  return {
    type: SUCCESS_CONFIRM,
  };
};

export const failConfirm = () => {
  return {
    type: FAIL_CONFIRM,
  };
};
