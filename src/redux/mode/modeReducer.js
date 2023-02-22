import { MODE } from "./modeType";

const initialState = {
  theme: !!JSON.parse(localStorage.getItem("theme")),
};

export const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODE:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
