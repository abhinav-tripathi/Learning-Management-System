import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../actions";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";

const Login = props => {
  const { from } = props.location.state || { from: { pathname: "/" } };
  const { userAuthenticates } = props;
  const { handleSubmit, pristine, submitting } = props;

  if (userAuthenticates) {
    return <Redirect to={from} />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 common-form align-center">
          <div className="form-heading">Login to your account</div>
          <form onSubmit={handleSubmit(props.login)}>
            <Field
              name="email"
              component={renderField}
              label="Email/Username"
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              label="Password"
            />
            <div className="float-left">
              <input
                type="submit"
                className="btn btn-primary form-label"
                disabled={pristine || submitting}
              />
            </div>
            <div className="float-left">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </div>
          </form>
          {props.error ? (
            <div className="float-left form-group col-md-12 no-padding-left text-danger">
              {props.error.msg}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userAuthenticates: state.userAuth.userAuthenticates,
  error: state.resHandler.error
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload))
});

const LoginUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default reduxForm({
  form: "loginForm", // a unique identifier for this form
  validate
})(LoginUser);
