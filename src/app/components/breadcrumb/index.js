import React from "react";
import { Link } from "react-router-dom";

function getLink(linkData) {
  return <Link to={linkData.url}>{linkData.pagename}</Link>;
}

const Breadcrumb = props => {
  return (
    <div className="breadcrumb-bg">
      <nav>
        <ul className="breadcrumb col-md-8 align-center-no-gap no-padding-left">
          {props.urlschema.map((url, i) => {
            return (
              <li className="breadcrumb-item" aria-current="page" key={i}>
                {url.url ? getLink(url) : `${url.pagename}`}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
