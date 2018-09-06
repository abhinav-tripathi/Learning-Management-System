import React from "react";
import { connect } from "react-redux";
import { addCompanyCadidate } from "../../../actions";
import { Field, reduxForm } from "redux-form";
import Breadcrumb from "../../breadcrumb";

let AddCompanyCandidate = props => {
  const { initialValues, handleSubmit, pristine, submitting } = props;
  initialValues["companyId"] = props.match.params.id;
  const breadcrumbUrl = [
    {
      url: "/",
      pagename: "Company"
    },
    {
      url: "/company-details/" + props.match.params.id,
      pagename: decodeURI(props.location.search.split("=")[1])
    },
    {
      url: "",
      pagename: "Add candidate"
    }
  ];

  return (
    <div>
      <Breadcrumb urlschema={breadcrumbUrl} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 common-form align-center">
            <div className="form-heading">Add candidate</div>
            <form onSubmit={handleSubmit(props.addCompanyCadidate)}>
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
                  value="Add company candidate"
                  disabled={pristine || submitting}
                />
              </div>
            </form>
            {props.dataAdded.success.success ? (
              <div className="col-md-12 no-padding-left float-left text-success">
                {props.dataAdded.success.msg}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedInUserID: state.userAuth.loggedInUserID,
  dataAdded: state.resHandler,
  initialValues: {}
});

const mapDispatchToProps = dispatch => ({
  addCompanyCadidate: payload => dispatch(addCompanyCadidate(payload))
});

AddCompanyCandidate = reduxForm({
  form: "addCompanyCandidate" // a unique identifier for this form
})(AddCompanyCandidate);

AddCompanyCandidate = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCompanyCandidate);

export default AddCompanyCandidate;
