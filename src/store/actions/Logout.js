import * as T from "../types";

export const OnLogout = () => {
  return (dispatch) => {
    dispatch({
      type: T.LOGOUT,
      payload: { loggedIn: false },
    });
  };
};
