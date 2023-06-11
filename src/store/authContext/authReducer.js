import { actions } from './authActions';

export const authReducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, user: action.payload };
    case actions.LOGOUT:
      return { ...state, user: null };
    case actions.SIGN_UP:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
