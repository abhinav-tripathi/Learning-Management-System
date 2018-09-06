import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-md-8 no-padding-left align-center-no-gap">
        <Link to="/" className="navbar-brand">
          Learning Management System
        </Link>
        <div className="collapse navbar-collapse float-right" id="navbarNav">
          {props.userAuthenticates ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Accounts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/course" className="nav-link">
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sessions" className="nav-link">
                  Sessions
                </Link>
              </li>
              <li>
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
