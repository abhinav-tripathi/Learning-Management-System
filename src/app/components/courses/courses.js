import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../search";
import AddLink from "../addLink";
import Table from "../dataTable";
import Breadcrumb from "../breadcrumb";
import { getCourseList, deleteCourse, searchCourse } from "../../actions";

class Courses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCourseList(this.props.loggedInUserID);
  }

  render() {
    const breadcrumbUrl = [{ url: "", pagename: "Course" }];
    const tableHeader = ["#", "Course", "Level", "Description", ""];
    const tableKey = ["name", "level", "description", ""];

    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <AddLink linktext="Add course +" url="/add-course" />
            <Search
              search={this.props.searchCourse}
              placeholder="Search course"
              loggedInUserID={this.props.loggedInUserID}
            />

            <Table
              tableHeader={tableHeader}
              tableData={this.props.courseList}
              tableHeading="Company list"
              tableKey={tableKey}
              editUrl="/edit-course/"
              deleteAction={this.props.deleteCourse}
              loggedInUserID={this.props.loggedInUserID}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUserID: state.userAuth.loggedInUserID,
  courseList: state.course.courseList
});

const mapDispatchToProps = dispatch => ({
  getCourseList: email => dispatch(getCourseList(email)),
  deleteCourse: (id, email) => dispatch(deleteCourse(id, email)),
  searchCourse: (q, email) => dispatch(searchCourse(q, email))
});

Courses = connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
export default Courses;
