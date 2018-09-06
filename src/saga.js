import { call, takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";

import {
  USER_AUTH,
  REGISTER_USER,
  LOGIN_USER,
  ADD_COMPANY_ACT,
  GET_COMPANY_DETAILS,
  LOAD_PRELOADED_COMPANY_FORM,
  UPDATE_COMPANY_DETAILS,
  GET_COMPANY_LIST,
  SHOW_COMPANY_LIST,
  DELETE_COMPANY,
  ADD_COMPANY_CANDIDATE,
  GET_COMPANY_CANDIDATE_LIST,
  SHOW_CANDIDATE_LIST,
  SEARCH_CANDIDATE,
  UPDATE_CANDIDATE_LIST,
  GET_CANDIDATE_DETAILS,
  LOAD_PRELOADED_CANDIDATE_FORM,
  UPDATE_CANDIDATE_DETAILS,
  DELETE_CANDIDATE,
  ADD_COURSE,
  DELETE_COURSE,
  SEARCH_COURSE,
  GET_COURSE_LIST,
  SHOW_COURSE_LIST,
  GET_COURSE_DETAILS,
  UPDATE_COURSE_DETAILS,
  LOAD_PRELOADED_COURSE_FORM,
  ADD_SESSION,
  GET_SESSION_LIST,
  DELETE_SESSION,
  SEARCH,
  ERROR,
  SUCCESS,
  SHOW_SESSION_LIST,
  SEARCH_SESSION,
  GET_SESSION_DETAILS,
  UPDATE_SESSION_DETAILS,
  LOAD_PRELOADED_SESSION_FORM
} from "./app/actions";

import axios from "axios";
const APIServer = "http://localhost:3000";

function getFormatDate(dateStr) {
  return dateStr.split("T")[0];
}

/**User authentication */
function* registerUser(action) {
  const auth = yield call(
    axios.post,
    `${APIServer}/users/register`,
    action.payload
  );

  if (auth.data.success) {
    localStorage.setItem("userAuthenticates", auth.data.success);
    localStorage.setItem("userId", action.payload.email);
    yield put({ type: USER_AUTH, auth: auth.data });
  }

  if (auth.data.error) {
    yield put({ type: ERROR, res: auth.data });
    yield delay(2000);
    yield put({ type: ERROR, res: "" });
  }
}

function* loginUser(action) {
  const auth = yield call(
    axios.post,
    `${APIServer}/users/login`,
    action.payload
  );

  if (auth.data.success) {
    localStorage.setItem("userAuthenticates", auth.data.success);
    localStorage.setItem("userId", action.payload.email);
    yield put({
      type: USER_AUTH,
      auth: auth.data,
      userId: action.payload.email
    });
  }
  if (auth.data.error) {
    yield put({ type: ERROR, res: auth.data });
    yield delay(2000);
    yield put({ type: ERROR, res: "" });
  }
}

/**Company CRUD operation */
function* addCompany(action) {
  const res = yield call(
    axios.post,
    `${APIServer}/company/add`,
    action.payload
  );
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
    yield delay(2000);
    yield put({ type: SUCCESS, res: "" });
  }
}

function* getCompanyDetails(action) {
  const res = yield call(axios.get, `${APIServer}/company/${action.id}`);
  if (res.data.success) {
    yield put({ type: LOAD_PRELOADED_COMPANY_FORM, res: res.data });
  }
}

function* updateCompanyDetails(action) {
  const res = yield call(
    axios.put,
    `${APIServer}/company/${action.payload._id}`,
    action.payload
  );
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
    yield delay(2000);
    yield put({ type: SUCCESS, res: "" });
  }
}

function* getCompanyList(action) {
  const companyList = yield call(
    axios.get,
    `${APIServer}/company/list?email=${action.email}`
  );
  yield put({ type: SHOW_COMPANY_LIST, companyList: companyList.data });
}

function* deleteCompany(action) {
  yield call(axios.delete, `${APIServer}/company/${action.id}`);
  const companyList = yield call(
    axios.get,
    `${APIServer}/company/list?email=${action.email}`
  );
  yield put({ type: SHOW_COMPANY_LIST, companyList: companyList.data });
}

/**Company candidate CURD operation */
function* addCompanyCandidate(action) {
  const res = yield call(
    axios.post,
    `${APIServer}/candidate/add`,
    action.payload
  );
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
    yield delay(2000);
    yield put({ type: SUCCESS, res: "" });
  }
}

function* getCompanyCandidateList(action) {
  const candidateList = yield call(
    axios.get,
    `${APIServer}/candidate/list/${action.id}`
  );
  yield put({ type: SHOW_CANDIDATE_LIST, data: candidateList.data.data });
}

function* deleteCandidate(action) {
  const candidateList = yield call(
    axios.delete,
    `${APIServer}/candidate/${action.id}?cid=${action.companyId}`
  );

  yield put({
    type: UPDATE_CANDIDATE_LIST,
    candidateList: candidateList.data
  });
}

function* searchCandidate(action) {
  yield delay(1000);
  const candidateList = yield call(
    axios.get,
    `${APIServer}/candidate/?q=${action.query}&email=${action.email}`
  );
  yield put({ type: UPDATE_CANDIDATE_LIST, candidateList: candidateList.data });
}

function* searchData(action) {
  yield delay(1000);
  const companyList = yield call(
    axios.get,
    `${APIServer}/company/?q=${action.query}&email=${action.email}`
  );
  yield put({ type: SHOW_COMPANY_LIST, companyList: companyList.data });
}

function* getCandidateDetails(action) {
  const res = yield call(axios.get, `${APIServer}/candidate/${action.id}`);
  if (res.data.success) {
    yield put({ type: LOAD_PRELOADED_CANDIDATE_FORM, res: res.data });
  }
}

function* updateCandidateDetails(action) {
  const res = yield call(
    axios.put,
    `${APIServer}/candidate/${action.payload._id}`,
    action.payload
  );
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
    yield delay(2000);
    yield put({ type: SUCCESS, res: "" });
  }
}

/**Course CRUD operation */
function* getCourseList(action) {
  const courseList = yield call(
    axios.get,
    `${APIServer}/course/list?email=${action.id}`
  );
  yield put({ type: SHOW_COURSE_LIST, courseList: courseList.data });
}

function* addCourse(action) {
  const res = yield call(axios.post, `${APIServer}/course/add`, action.payload);
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
    yield delay(2000);
    yield put({ type: SUCCESS, res: "" });
  }
}

function* deleteCourse(action) {
  yield call(axios.delete, `${APIServer}/course/${action.id}`);
  const courseList = yield call(
    axios.get,
    `${APIServer}/course/list?email=${action.email}`
  );
  yield put({ type: SHOW_COURSE_LIST, courseList: courseList.data });
}

function* searchCourse(action) {
  yield delay(1000);
  const courseList = yield call(
    axios.get,
    `${APIServer}/course/?q=${action.q}&email=${action.email}`
  );
  yield put({ type: SHOW_COURSE_LIST, courseList: courseList.data });
}

function* getCourseDetails(action) {
  const res = yield call(axios.get, `${APIServer}/course/${action.id}`);
  if (res.data.success) {
    yield put({ type: LOAD_PRELOADED_COURSE_FORM, res: res.data });
  }
}

function* updateCourse(action) {
  const res = yield call(
    axios.put,
    `${APIServer}/course/${action.payload._id}`,
    action.payload
  );
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
  }
}

function* addSession(action) {
  const res = yield call(
    axios.post,
    `${APIServer}/session/add`,
    action.payload
  );
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
    yield delay(2000);
    yield put({ type: SUCCESS, res: "" });
  }
}

function* getSession(action) {
  const res = yield call(
    axios.get,
    `${APIServer}/session/list?email=${action.id}`,
    action.payload
  );
  yield put({ type: SHOW_SESSION_LIST, sessionList: res.data });
}

function* deleteSession(action) {
  yield call(axios.delete, `${APIServer}/session/${action.id}`);
  const sessionList = yield call(
    axios.get,
    `${APIServer}/session/list?email=${action.email}`
  );
  yield put({ type: SHOW_SESSION_LIST, sessionList: sessionList.data });
}

function* searchSession(action) {
  yield delay(1000);
  const sessionList = yield call(
    axios.get,
    `${APIServer}/session/?q=${action.q}&email=${action.email}`
  );
  yield put({ type: SHOW_SESSION_LIST, sessionList: sessionList.data });
}

function* getSessionDetails(action) {
  const res = yield call(axios.get, `${APIServer}/session/${action.id}`);
  if (res.data.success) {
    res.data.data.startDate = getFormatDate(res.data.data.startDate);
    res.data.data.endDate = getFormatDate(res.data.data.endDate);
    yield put({ type: LOAD_PRELOADED_SESSION_FORM, res: res.data });
    yield put({
      type: UPDATE_CANDIDATE_LIST,
      candidateList: res.data.candidateResult
    });
  }
}

function* updateSessiondetails(action) {
  const res = yield call(
    axios.put,
    `${APIServer}/session/${action.payload._id}`,
    action.payload
  );
  if (res.data.success) {
    yield put({ type: SUCCESS, res: res.data });
    yield delay(2000);
    yield put({ type: SUCCESS, res: "" });
  }
}

/**Common watcher generator */
function* watchAddTaskAsynch() {
  yield takeEvery(REGISTER_USER, registerUser);
  yield takeEvery(LOGIN_USER, loginUser);

  yield takeEvery(ADD_COMPANY_ACT, addCompany);
  yield takeEvery(GET_COMPANY_DETAILS, getCompanyDetails);
  yield takeEvery(GET_COMPANY_LIST, getCompanyList);
  yield takeEvery(UPDATE_COMPANY_DETAILS, updateCompanyDetails);
  yield takeEvery(DELETE_COMPANY, deleteCompany);

  yield takeEvery(ADD_COMPANY_CANDIDATE, addCompanyCandidate);
  yield takeEvery(GET_COMPANY_CANDIDATE_LIST, getCompanyCandidateList);
  yield takeEvery(DELETE_CANDIDATE, deleteCandidate);
  yield takeEvery(SEARCH_CANDIDATE, searchCandidate);
  yield takeEvery(GET_CANDIDATE_DETAILS, getCandidateDetails);
  yield takeEvery(UPDATE_CANDIDATE_DETAILS, updateCandidateDetails);
  yield takeEvery(SEARCH_COURSE, searchCourse);

  yield takeEvery(GET_COURSE_LIST, getCourseList);
  yield takeEvery(ADD_COURSE, addCourse);
  yield takeEvery(DELETE_COURSE, deleteCourse);
  yield takeEvery(GET_COURSE_DETAILS, getCourseDetails);
  yield takeEvery(UPDATE_COURSE_DETAILS, updateCourse);

  yield takeEvery(ADD_SESSION, addSession);
  yield takeEvery(GET_SESSION_LIST, getSession);
  yield takeEvery(DELETE_SESSION, deleteSession);
  yield takeEvery(SEARCH_SESSION, searchSession);
  yield takeEvery(GET_SESSION_DETAILS, getSessionDetails);
  yield takeEvery(UPDATE_SESSION_DETAILS, updateSessiondetails);

  yield takeEvery(SEARCH, searchData);
}

export default function* rootSaga() {
  yield watchAddTaskAsynch();
}
