import React from "react";
import { Field } from "redux-form";
import renderField from "../renderField";

const CompanyForm = props => {
  const { pristine, submitting } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 common-form align-center">
          <div className="form-heading">{props.formHeading}</div>
          <form onSubmit={props.submit}>
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
                value={props.btnValue}
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
  );
};

export default CompanyForm;
