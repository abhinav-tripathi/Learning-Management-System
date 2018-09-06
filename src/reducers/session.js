import { SHOW_SESSION_LIST, LOAD_PRELOADED_SESSION_FORM } from "../app/actions";

const initialState = {
  sessionList: [],
  sessionDetails: {}
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SESSION_LIST:
      return {
        ...state,
        sessionList: action.sessionList
      };
    case LOAD_PRELOADED_SESSION_FORM:
      return {
        ...state,
        sessionDetails: action.res
      };
    default:
      return state;
  }
};

export default session;
