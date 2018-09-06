import React, { Component } from "react";
import { connect } from "react-redux";
import AddLink from "../addLink";
import Search from "../search";
import Breadcrumb from "../breadcrumb";
import Table from "../dataTable";
import { getCompanyAct, companyDelete, search } from "../../actions";

class CompanyAccount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCompanyAct(this.props.loggedInUserID);
  }

  render() {
    const breadcrumbUrl = [{ url: "", pagename: "Company" }];
    const tableHeader = [
      "#",
      "Account name",
      "Contact number",
      "Point of contact",
      ""
    ];
    const tableKey = ["name", "contactNumber", "POC", ""];

    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <AddLink linktext="Add company +" url="/add-company" />
            <Search
              search={this.props.search}
              loggedInUserID={this.props.loggedInUserID}
              placeholder="Search company"
            />
            <Table
              tableHeader={tableHeader}
              tableData={this.props.companyList}
              tableHeading="Company list"
              tableKey={tableKey}
              linkUrl="/company-details/"
              editUrl="/edit-company/"
              deleteAction={this.props.companyDelete}
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
  companyList: state.company.companyList
});

const mapDispatchToProps = dispatch => ({
  getCompanyAct: email => dispatch(getCompanyAct(email)),
  companyDelete: (id, email) => dispatch(companyDelete(id, email)),
  search: (query, email) => dispatch(search(query, email))
});

const CompanyAct = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyAccount);
export default CompanyAct;
