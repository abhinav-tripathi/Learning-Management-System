import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Breadcrumb from "../../breadcrumb";
import { getCandidateDetails, updateCandidateDetails } from "../../../actions";

class EditCandidate extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCandidateDetails(this.props.match.params.id);
  }

  render() {
    const breadcrumbUrl = [
      {
        url: "/",
        pagename: "Company"
      },
      {
        url:
          "/company-details/" +
          window.location.search.split("=")[1].split("&")[0],
        pagename: "Company details"
      },
      {
        url: "",
        pagename: decodeURI(window.location.search.split("=")[2])
      }
    ];
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-6 common-form align-center">
              <div className="form-heading">Edit candidate</div>
              <form onSubmit={handleSubmit(this.props.updateCandidateDetails)}>
                <div className="form-group">
                  <label className="control-label form-label">Name</label>
                  <div>
                    <Field
                      name="name"
                      component="input"
                      className="form-control form-label"
                      label="Candidate name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">Email</label>
                  <div>
                    <Field
                      name="email"
                      type="email"
                      component="input"
                      className="form-control form-label"
                      label="Candidate email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">Skills</label>
                  <div>
                    <Field
                      name="skills"
                      component="input"
                      className="form-control form-label"
                      label="Candidate skills"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">
                    Contact number
                  </label>
                  <div>
                    <Field
                      name="contactNumber"
                      component="input"
                      className="form-control form-label"
                      label="Candidate skills"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">
                    Relevant experience
                  </label>
                  <div>
                    <Field
                      name="relevantExperience"
                      component="input"
                      className="form-control form-label"
                      label="Relevant experience"
                    />
                  </div>
                </div>
                <div className="float-left">
                  <input
                    type="submit"
                    className="btn btn-primary form-label"
                    value="Update company candidate"
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
  initialValues: state.company.candidateDetails.data
});

const mapDispatchToProps = dispatch => ({
  getCandidateDetails: id => dispatch(getCandidateDetails(id)),
  updateCandidateDetails: payload => dispatch(updateCandidateDetails(payload))
});

EditCandidate = reduxForm({
  form: "updateCandidateDetails" // a unique identifier for this form
})(EditCandidate);

const EditCandidateDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCandidate);
export default EditCandidateDetails;
