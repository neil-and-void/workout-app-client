import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';

import * as constants from '../constants/user';

const initialState = {
  loading: false,
  email: '',
  firstname: '',
  error: null,
};

const userReducer = produce((draft, action) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      // draft = action.payload;
      break;
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
