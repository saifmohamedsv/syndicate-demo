import * as T from "../types";


export const OnLogin = () => {
  return (dispatch) => {
    dispatch({
      type: T.LOGIN,
      payload: { loggedIn: true },
    });
  };
};
