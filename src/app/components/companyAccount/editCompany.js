import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Breadcrumb from "../breadcrumb";
import { getCompanyDetails, updateCompanyDetails } from "../../actions";

class EditCompany extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCompanyDetails(this.props.match.params.id);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const breadcrumbUrl = [
      {
        url: "/",
        pagename: "Company"
      },
      {
        url: "",
        pagename: decodeURI(this.props.location.search.split("=")[1])
      }
    ];
    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-6 common-form align-center">
              <div className="form-heading">Edit company</div>
              <form onSubmit={handleSubmit(this.props.updateCompanyDetails)}>
                <div className="form-group">
                  <label className="control-label form-label">
                    Company name
                  </label>
                  <div>
                    <Field
                      name="name"
                      component="input"
                      className="form-control form-label"
                      label="Account name"
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
                      type="tel"
                      component="input"
                      className="form-control form-label"
                      label="Contact number"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">
                    Point of contact
                  </label>
                  <div>
                    <Field
                      name="POC"
                      component="input"
                      className="form-control form-label"
                      label="Point of contact"
                    />
                  </div>
                </div>

                <div className="float-left">
                  <input
                    type="submit"
                    className="btn btn-primary form-label"
                    value="Update company account"
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
  initialValues: state.company.companyDetails.data
});

const mapDispatchToProps = dispatch => ({
  getCompanyDetails: id => dispatch(getCompanyDetails(id)),
  updateCompanyDetails: payload => dispatch(updateCompanyDetails(payload))
});

EditCompany = reduxForm({
  form: "updateCompanyAct" // a unique identifier for this form
})(EditCompany);

const EditCompanyAct = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCompany);
export default EditCompanyAct;
