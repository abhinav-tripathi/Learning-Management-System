import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Breadcrumb from "../breadcrumb";
import { getCourseDetails, updateCourse } from "../../actions";

class EditCourse extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCourseDetails(this.props.match.params.id);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const breadcrumbUrl = [
      {
        url: "/course",
        pagename: "Course"
      },
      {
        url: "",
        pagename: decodeURI(window.location.search.split("=")[1].split("&")[0])
      }
    ];
    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-6 common-form align-center">
              <div className="form-heading">Edit course</div>
              <form onSubmit={handleSubmit(this.props.updateCourse)}>
                <div className="form-group">
                  <label className="control-label form-label">
                    Course name
                  </label>
                  <div>
                    <Field
                      name="name"
                      component="input"
                      className="form-control form-label"
                      label="Course name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label form-label">
                    Course level
                  </label>
                  <div>
                    <Field
                      name="level"
                      component="input"
                      className="form-control form-label"
                      label="Course level"
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
                      label="Course topics"
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
                      label="Course description"
                    />
                  </div>
                </div>
                <div className="float-left">
                  <input
                    type="submit"
                    className="btn btn-primary form-label"
                    value="Update course"
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
  initialValues: state.course.courseDetails.data
});

const mapDispatchToProps = dispatch => ({
  getCourseDetails: id => dispatch(getCourseDetails(id)),
  updateCourse: payload => dispatch(updateCourse(payload))
});

EditCourse = reduxForm({
  form: "editCourseDetails" // a unique identifier for this form
})(EditCourse);

const EditCourseDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCourse);
export default EditCourseDetails;
