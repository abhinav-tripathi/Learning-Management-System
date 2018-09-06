/**
 * Common actions for LMS
 */

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_AUTH = "USER_AUTH";

export const ADD_COMPANY_ACT = "ADD_COMPANY_ACT";
export const GET_COMPANY_LIST = "GET_COMPANY_LIST";
export const GET_COMPANY_DETAILS = "GET_COMPANY_DETAILS";
export const LOAD_PRELOADED_COMPANY_FORM = "LOAD_PRELOADED_COMPANY_FORM";
export const UPDATE_COMPANY_DETAILS = "UPDATE_COMPANY_DETAILS";
export const SHOW_COMPANY_LIST = "SHOW_COMPANY_LIST";
export const DELETE_COMPANY = "DELETE_COMPANY";

export const ADD_COMPANY_CANDIDATE = "ADD_COMPANY_CANDIDATE";
export const GET_COMPANY_CANDIDATE_LIST = "GET_COMPANY_CANDIDATE_LIST";
export const SHOW_CANDIDATE_LIST = "SHOW_CANDIDATE_LIST";
export const DELETE_CANDIDATE = "DELETE_CANDIDATE";
export const SEARCH_CANDIDATE = "SEARCH_CANDIDATE";
export const UPDATE_CANDIDATE_LIST = "UPDATE_CANDIDATE_LIST";
export const GET_CANDIDATE_DETAILS = "GET_CANDIDATE_DETAILS";
export const UPDATE_CANDIDATE_DETAILS = "UPDATE_CANDIDATE_DETAILS";
export const LOAD_PRELOADED_CANDIDATE_FORM = "LOAD_PRELOADED_CANDIDATE_FORM";

export const ADD_COURSE = "ADD_COURSE";
export const GET_COURSE_LIST = "GET_COURSE_LIST";
export const DELETE_COURSE = "DELETE_COURSE";
export const GET_COURSE_DETAILS = "GET_COURSE_DETAILS";
export const LOAD_PRELOADED_COURSE_FORM = "LOAD_PRELOADED_COURSE_FORM";
export const UPDATE_COURSE_DETAILS = "UPDATE_COURSE_DETAILS";
export const SEARCH_COURSE = "SEARCH_COURSE";
export const SHOW_COURSE_LIST = "SHOW_COURSE_LIST";

export const ADD_SESSION = "ADD_SESSION";
export const GET_SESSION_LIST = "GET_SESSION_LIST";
export const DELETE_SESSION = "DELETE_SESSION";
export const GET_SESSION_DETAILS = "GET_SESSION_DETAILS";
export const LOAD_PRELOADED_SESSION_FORM = "LOAD_PRELOADED_SESSION_FORM";
export const UPDATE_SESSION_DETAILS = "UPDATE_SESSION_DETAILS";
export const SEARCH_SESSION = "SEARCH_SESSION";
export const SHOW_SESSION_LIST = "SHOW_SESSION_LIST";

export const SEARCH = "SEARCH";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

/**
 * User auhthentication action
 */
export const register = payload => ({
  type: REGISTER_USER,
  payload
});

export const login = payload => ({
  type: LOGIN_USER,
  payload
});

export const logout = logoutStatus => ({
  type: LOGOUT_USER,
  logoutStatus
});

/**
 * Add/update/delete company action
 */

export const addCompanyAct = payload => ({
  type: ADD_COMPANY_ACT,
  payload
});

export const getCompanyDetails = id => ({
  type: GET_COMPANY_DETAILS,
  id
});

export const updateCompanyDetails = payload => ({
  type: UPDATE_COMPANY_DETAILS,
  payload
});

export const getCompanyAct = email => ({
  type: GET_COMPANY_LIST,
  email
});

export const companyDelete = (id, email) => ({
  type: DELETE_COMPANY,
  id,
  email
});

export const getCandidateList = id => ({
  type: GET_COMPANY_CANDIDATE_LIST,
  id
});

export const addCompanyCadidate = payload => ({
  type: ADD_COMPANY_CANDIDATE,
  payload
});

export const deleteCandidate = (id, companyId) => ({
  type: DELETE_CANDIDATE,
  id,
  companyId
});

export const getCandidateDetails = id => ({
  type: GET_CANDIDATE_DETAILS,
  id
});

export const updateCandidateDetails = payload => ({
  type: UPDATE_CANDIDATE_DETAILS,
  payload
});

/**
 * Course action
 */
export const addCourse = payload => ({
  type: ADD_COURSE,
  payload
});

export const deleteCourse = (id, email) => ({
  type: DELETE_COURSE,
  id,
  email
});

export const getCourseList = id => ({
  type: GET_COURSE_LIST,
  id
});

export const searchCourse = (q, email) => ({
  type: SEARCH_COURSE,
  q,
  email
});

export const getCourseDetails = id => ({
  type: GET_COURSE_DETAILS,
  id
});

export const updateCourse = payload => ({
  type: UPDATE_COURSE_DETAILS,
  payload
});

/**
 * Session action
 */
export const addSession = payload => ({
  type: ADD_SESSION,
  payload
});

export const deleteSession = (id, email) => ({
  type: DELETE_SESSION,
  id,
  email
});

export const getSessionList = id => ({
  type: GET_SESSION_LIST,
  id
});

export const searchSession = (q, email) => ({
  type: SEARCH_SESSION,
  q,
  email
});

export const getSessionDetails = id => ({
  type: GET_SESSION_DETAILS,
  id
});

export const updateSession = payload => ({
  type: UPDATE_SESSION_DETAILS,
  payload
});

/**
 * Search data
 */
export const search = (query, email) => ({
  type: SEARCH,
  query,
  email
});

export const searchCandidate = (query, email) => ({
  type: SEARCH_CANDIDATE,
  query,
  email
});
