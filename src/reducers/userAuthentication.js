import { USER_AUTH, LOGOUT_USER } from "../app/actions";

const initialState = {
  userAuthenticates:
    localStorage.getItem("userAuthenticates") === "true" ? true : false,
  loggedInUserID: localStorage.getItem("userId")
};

const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        userAuthenticates: action.auth.success,
        loggedInUserID: action.userId
      };
    case LOGOUT_USER:
      return {
        ...state,
        userAuthenticates: false,
        loggedInUserID: ""
      };
    default:
      return state;
  }
};

export default userAuth;
