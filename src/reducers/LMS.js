/**
 * Common reducers for LMS
 */
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import userAuth from "./userAuthentication";
import company from "./company";
import course from "./course";
import session from "./session";
import resHandler from "./resHandler";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  company: company,
  userAuth: userAuth,
  resHandler: resHandler,
  course: course,
  session: session
});

export default rootReducer;
