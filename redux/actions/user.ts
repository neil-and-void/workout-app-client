export const getUser = (user: LoginUser) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: constants.LOGIN,
      });
      const response = await authService.login(user);
      dispatch({
        type: constants.LOGIN_SUCCESS,
        token: response.data.token_type + ' ' + response.data.access_token,
      });
    } catch (err) {
      dispatch({
        type: constants.LOGIN_ERROR,
        error: err.response.data,
      });
    }
  };
};
