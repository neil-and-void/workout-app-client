import * as constants from '../constants/set';

export const createNewSet = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: constants.CREATE_NEW_SET,
      });
      dispatch({
        type: constants.CREATE_NEW_SET_SUCCESS,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: constants.CREATE_NEW_SET_ERROR,
      });
    }
  };
};
