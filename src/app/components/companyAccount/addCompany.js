import React from "react";
import { connect } from "react-redux";
import { addCompanyAct } from "../../actions";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";
import Breadcrumb from "../breadcrumb";

let AddCompany = props => {
  const { handleSubmit, pristine, submitting } = props;
  const breadcrumbUrl = [
    {
      url: "/",
      pagename: "Company"
    },
    {
      url: "",
      pagename: "Add company"
    }
  ];

  return (
    <div>
      <Breadcrumb urlschema={breadcrumbUrl} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 common-form align-center">
            <div className="form-heading">Add company</div>
            <form onSubmit={handleSubmit(props.addCompanyAct)}>
              <Field name="name" component={renderField} label="Account name" />
              <Field
                name="contactNumber"
                type="tel"
                component={renderField}
                label="Contact number"
              />
              <Field
                name="POC"
                component={renderField}
                label="Point of contact"
              />
              <div className="float-left">
                <input
                  type="submit"
                  className="btn btn-primary form-label"
                  value="Add company account"
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
  initialValues: { email: state.userAuth.loggedInUserID }
});

const mapDispatchToProps = dispatch => ({
  addCompanyAct: payload => dispatch(addCompanyAct(payload))
});

AddCompany = reduxForm({
  form: "addCompanyAct", // a unique identifier for this form
  validate
})(AddCompany);

const AddCompanyAct = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCompany);

export default AddCompanyAct;
