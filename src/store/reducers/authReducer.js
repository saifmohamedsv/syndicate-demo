import { LOGIN, LOGOUT } from "../types";

const initialState = {
  loggedIn: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, ...payload };
    case LOGOUT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
