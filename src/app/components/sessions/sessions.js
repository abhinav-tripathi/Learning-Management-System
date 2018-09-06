import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../search";
import AddLink from "../addLink";
import Breadcrumb from "../breadcrumb";
import Table from "../dataTable";
import { getSessionList, searchSession, deleteSession } from "../../actions";

class Session extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSessionList(this.props.loggedInUserID);
  }

  render() {
    const breadcrumbUrl = [{ url: "", pagename: "Session" }];
    const tableHeader = [
      "#",
      "Session",
      "Account",
      "Course",
      "Start date",
      "End Date",
      ""
    ];
    const tableKey = [
      "session",
      "accountName",
      "courseName",
      "startDate",
      "endDate",
      ""
    ];

    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <AddLink linktext="Create session +" url="/create-session" />
            <Search
              search={this.props.searchSession}
              placeholder="Search session"
              loggedInUserID={this.props.loggedInUserID}
            />

            <Table
              tableHeader={tableHeader}
              tableData={this.props.sessionList}
              tableHeading="Session list"
              tableKey={tableKey}
              editUrl="/edit-session/"
              deleteAction={this.props.deleteSession}
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
  sessionList: state.session.sessionList
});

const mapDispatchToProps = dispatch => ({
  searchSession: (q, email) => dispatch(searchSession(q, email)),
  deleteSession: (id, email) => dispatch(deleteSession(id, email)),
  getSessionList: email => dispatch(getSessionList(email))
});

Session = connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
export default Session;
