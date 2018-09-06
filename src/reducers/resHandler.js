import { SUCCESS, ERROR } from "../app/actions";

const initialState = {
  error: "",
  success: ""
};

const resHandler = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        success: action.res
      };
    case ERROR:
      return {
        ...state,
        error: action.res
      };
    default:
      return state;
  }
};

export default resHandler;
