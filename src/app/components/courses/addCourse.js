import React from "react";
import { connect } from "react-redux";
import { addCourse } from "../../actions";
import Breadcrumb from "../breadcrumb";
import { Field, reduxForm } from "redux-form";

const AddCourse = props => {
  const { handleSubmit, pristine, submitting } = props;
  const breadcrumbUrl = [
    {
      url: "/course",
      pagename: "Course"
    },
    {
      url: "",
      pagename: "Add course"
    }
  ];
  return (
    <div>
      <Breadcrumb urlschema={breadcrumbUrl} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 common-form align-center">
            <div className="form-heading">Add course</div>
            <form onSubmit={handleSubmit(props.addCourse)}>
              <div className="form-group">
                <label className="control-label form-label">Course name</label>
                <div>
                  <Field
                    name="name"
                    component="input"
                    className="form-control form-label"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label form-label">Course level</label>
                <div>
                  <Field
                    name="level"
                    component="input"
                    className="form-control form-label"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label form-label">
                  Course topics
                </label>
                <div>
                  <Field
                    name="topics"
                    component="textarea"
                    className="form-control form-label"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label form-label">
                  Course description
                </label>
                <div>
                  <Field
                    name="description"
                    component="textarea"
                    className="form-control form-label"
                  />
                </div>
              </div>
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
  addCourse: payload => dispatch(addCourse(payload))
});

const AddCourseForm = reduxForm({
  form: "addCourseForm" // a unique identifier for this form
})(AddCourse);

const AddCourseData = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCourseForm);

export default AddCourseData;
