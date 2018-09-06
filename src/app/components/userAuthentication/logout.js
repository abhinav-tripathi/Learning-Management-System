import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../actions";

const Logout = props => {
  props.logout("false");
  localStorage.removeItem("userAuthenticates");

  const { from } = { from: { pathname: "/" } };
  const { userAuthenticates } = props;

  if (userAuthenticates) {
    return <Redirect to={from} />;
  }

  return <div className="form-inline">Logging out...</div>;
};

const mapStateToProps = state => ({
  userAuthenticates: state.userAuth.userAuthenticates
});

const mapDispatchToProps = dispatch => ({
  logout: logoutStatus => dispatch(logout(logoutStatus))
});

const LogoutUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
export default LogoutUser;
