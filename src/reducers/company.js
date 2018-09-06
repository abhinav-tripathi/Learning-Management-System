import {
  SHOW_COMPANY_LIST,
  LOAD_PRELOADED_COMPANY_FORM,
  SHOW_CANDIDATE_LIST,
  UPDATE_CANDIDATE_LIST,
  LOAD_PRELOADED_CANDIDATE_FORM
} from "../app/actions";

const initialState = {
  companyList: [],
  companyDetails: {},
  candidateList: [],
  candidateDetails: {}
};

const company = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMPANY_LIST:
      return {
        ...state,
        companyList: action.companyList
      };
    case LOAD_PRELOADED_COMPANY_FORM:
      return {
        ...state,
        companyDetails: action.res
      };
    case SHOW_CANDIDATE_LIST:
      return {
        ...state,
        candidateList: action.data.candidateList,
        companyDetails: action.data.companyDetails
      };
    case UPDATE_CANDIDATE_LIST:
      return {
        ...state,
        candidateList: action.candidateList
      };
    case LOAD_PRELOADED_CANDIDATE_FORM:
      return {
        ...state,
        candidateDetails: action.res
      };
    default:
      return state;
  }
};

export default company;
