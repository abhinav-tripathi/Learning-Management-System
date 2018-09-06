import React from "react";
import { Link } from "react-router-dom";

const AddLink = props => {
  return (
    <div className="col-md-10 align-center-no-gap no-padding-left margin-top-btm20 ">
      <Link to={props.url} className="btn btn-primary">
        {props.linktext}
      </Link>
    </div>
  );
};

export default AddLink;
