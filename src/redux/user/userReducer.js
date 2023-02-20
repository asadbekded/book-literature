import { REMOVE_USER, USER } from "./userType";

const userState = {
  user: {},
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };

    case REMOVE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
