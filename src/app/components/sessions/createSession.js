import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSession,
  getCompanyAct,
  getCandidateList,
  getCourseList
} from "../../actions";
import Breadcrumb from "../breadcrumb";
import { Field, reduxForm } from "redux-form";
import DatePicker from "../formFields/datePicker";

class CreateSession extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCompanyAct(this.props.loggedInUserID);
    this.props.getCourseList(this.props.loggedInUserID);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const breadcrumbUrl = [
      {
        url: "/sessions",
        pagename: "Session"
      },
      {
        url: "",
        pagename: "Create session"
      }
    ];
    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-6 common-form align-center">
              <div className="form-heading">Create session</div>
              <form onSubmit={handleSubmit(this.props.addSession)}>
                <div className="form-group">
                  <label className="control-label form-label">Name</label>
                  <div>
                    <Field
                      name="session"
                      component="input"
                      className="form-control form-label"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">
                    Select account
                  </label>
                  <div>
                    <Field
                      name="accountId"
                      type="select"
                      component="select"
                      className="form-control form-label"
                      onChange={e => {
                        this.props.getCandidateList(e.currentTarget.value);
                      }}
                    >
                      <option>--Select company--</option>
                      {this.props.companyList.map((company, i) => {
                        return (
                          <option key={i} value={company._id}>
                            {company.name}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">
                    Select candidate
                  </label>
                  <div>
                    <Field
                      name="candidateList"
                      component="select"
                      multiple={true}
                      className="form-control form-label"
                      type="select-multiple"
                    >
                      {this.props.candidateList.map((candidate, i) => {
                        return (
                          <option key={i} value={candidate._id}>
                            {candidate.name}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">
                    Select course
                  </label>
                  <div>
                    <Field
                      name="courseId"
                      type="select"
                      component="select"
                      className="form-control form-label"
                    >
                      <option>--Select course--</option>
                      {this.props.courseList.map((course, i) => {
                        return (
                          <option key={i} value={course._id}>
                            {course.name}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">Start date</label>
                  <div>
                    <Field
                      name="startDate"
                      component={DatePicker}
                      className="form-control form-label"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">End date</label>
                  <div>
                    <Field name="endDate" component={DatePicker} />
                  </div>
                </div>
                <div className="float-left">
                  <input
                    type="submit"
                    className="btn btn-primary form-label"
                    value="Create session"
                    disabled={pristine || submitting}
                  />
                </div>
              </form>
              {this.props.dataAdded.success.success ? (
                <div className="col-md-12 no-padding-left float-left text-success">
                  {this.props.dataAdded.success.msg}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUserID: state.userAuth.loggedInUserID,
  dataAdded: state.resHandler,
  companyList: state.company.companyList,
  candidateList: state.company.candidateList,
  courseList: state.course.courseList,
  initialValues: { email: state.userAuth.loggedInUserID }
});

const mapDispatchToProps = dispatch => ({
  addSession: payload => dispatch(addSession(payload)),
  getCompanyAct: email => dispatch(getCompanyAct(email)),
  getCandidateList: id => dispatch(getCandidateList(id)),
  getCourseList: id => dispatch(getCourseList(id))
});

CreateSession = reduxForm({
  form: "createSessionForm" // a unique identifier for this form
})(CreateSession);

CreateSession = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSession);

export default CreateSession;
