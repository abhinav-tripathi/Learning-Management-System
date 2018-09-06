import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../search";
import Table from "../dataTable";
import Breadcrumb from "../breadcrumb";
import {
  getCandidateList,
  deleteCandidate,
  searchCandidate
} from "../../actions";

class CompanyDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCandidateList(this.props.match.params.id);
  }

  render() {
    const breadcrumbUrl = [
      {
        url: "/",
        pagename: "Company"
      },
      {
        url: "",
        pagename: this.props.companyDetails.name
      }
    ];
    const tableHeader = [
      "#",
      "Name",
      "Email",
      "Skills",
      "Contact number",
      "Relevant experience",
      ""
    ];
    const tableKey = [
      "name",
      "email",
      "skills",
      "contactNumber",
      "relevantExperience",
      ""
    ];

    return (
      <div>
        <Breadcrumb urlschema={breadcrumbUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-10 align-center-no-gap no-padding-left margin-top-btm20 ">
              <div className="form-heading">Company details</div>
              <table className="table table-striped margin-btm50">
                <tbody>
                  <tr>
                    <td scope="row">Company name</td>
                    <td>{this.props.companyDetails.name}</td>
                  </tr>
                  <tr>
                    <td scope="row">Email</td>
                    <td>{this.props.companyDetails.email}</td>
                  </tr>
                  <tr>
                    <td scope="row">Point of contact</td>
                    <td>{this.props.companyDetails.POC}</td>
                  </tr>
                  <tr>
                    <td scope="row">Contact number</td>
                    <td>{this.props.companyDetails.contactNumber}</td>
                  </tr>
                </tbody>
              </table>
              <Link
                to={`/add-candidate/${this.props.match.params.id}?cname=${
                  this.props.companyDetails.name
                }`}
                className="btn btn-primary"
              >
                Add Candidates +
              </Link>
            </div>
            <Search
              search={this.props.searchCandidate}
              placeholder="Search candidate"
              loggedInUserID={this.props.loggedInUserID}
            />
            <Table
              tableHeader={tableHeader}
              tableData={this.props.candidateList}
              tableHeading="Candidate list"
              tableKey={tableKey}
              editUrl="/edit-candidate/"
              deleteAction={this.props.deleteCandidate}
              loggedInUserID={this.props.loggedInUserID}
              cid="yes"
              params={this.props.match.params.id}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUserID: state.userAuth.loggedInUserID,
  candidateList: state.company.candidateList,
  companyDetails: state.company.companyDetails
});

const mapDispatchToProps = dispatch => ({
  getCandidateList: id => dispatch(getCandidateList(id)),
  deleteCandidate: (id, companyId) => dispatch(deleteCandidate(id, companyId)),
  searchCandidate: (query, email) => dispatch(searchCandidate(query, email))
});

const CompanyActDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetails);
export default CompanyActDetails;
