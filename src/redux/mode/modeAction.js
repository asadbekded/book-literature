import { MODE } from "./modeType";

export const modeAction = (e) => async (dispatch) => {
  localStorage.setItem("theme", e);

  dispatch({
    type: MODE,
    payload: e,
  });

};
