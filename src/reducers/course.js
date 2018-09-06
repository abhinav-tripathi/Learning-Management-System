import { SHOW_COURSE_LIST, LOAD_PRELOADED_COURSE_FORM } from "../app/actions";

const initialState = {
  courseList: [],
  courseDetails: {}
};

const course = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COURSE_LIST:
      return {
        ...state,
        courseList: action.courseList
      };
    case LOAD_PRELOADED_COURSE_FORM:
      return {
        ...state,
        courseDetails: action.res
      };
    default:
      return state;
  }
};

export default course;
