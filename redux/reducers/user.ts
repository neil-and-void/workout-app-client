import produce from 'immer';
import * as constants from '../constants/user';

const initialState = {
  loading: false,
  email: '',
  firstname: '',
  error: null,
};

const userReducer = produce((draft, action) => {
  switch (action.type) {
    case constants.GET_USER:
      draft.loading = true;
      break;
    case constants.GET_USER_SUCCESS:
      draft.loading = false;
      draft.email = action.payload.email;
      draft.firstname = action.payload.firstname;
      break;
    case constants.GET_USER_ERROR:
      draft.loading = false;
      break;
  }
}, initialState);

export default userReducer;
