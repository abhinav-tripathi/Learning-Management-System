import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import auth from "./components/auth";

import LoginUser from "./components/userAuthentication/login";
import RegisterUser from "./components/userAuthentication/register";
import LogoutUser from "./components/userAuthentication/logout";

import CompanyAct from "./components/companyAccount/company";
import AddCompanyAct from "./components/companyAccount/addCompany";
import EditCompanyAct from "./components/companyAccount/editCompany";
import CompanyActDetails from "./components/companyAccount/companyDetails";

import AddCompanyCandidate from "./components/companyAccount/candidate/addCandidate";
import EditCandidateDetails from "./components/companyAccount/candidate/editCandidate";

import Courses from "./components/courses/courses";
import AddCourseData from "./components/courses/addCourse";
import EditCourseDetails from "./components/courses/editCourse";

import Session from "./components/sessions/sessions";
import CreateSession from "./components/sessions/createSession";
import EditSession from "./components/sessions/editSession";

import { PrivateRoute } from "./components/privateRoute";
import Navigation from "./navigation";

import NotFound from "./components/404";

const AppRouter = props => {
  return (
    <Router>
      <div>
        <Navigation userAuthenticates={props.userAuthenticates} />
        <Switch>
          <PrivateRoute
            path="/"
            authed={auth.authenticate()}
            exact={true}
            component={CompanyAct}
          />
          <PrivateRoute
            path="/add-company"
            authed={auth.authenticate()}
            exact={true}
            component={AddCompanyAct}
          />
          <PrivateRoute
            path="/edit-company/:id"
            authed={auth.authenticate()}
            exact={true}
            component={EditCompanyAct}
          />
          <PrivateRoute
            path="/company-details/:id"
            authed={auth.authenticate()}
            exact={true}
            component={CompanyActDetails}
          />
          <PrivateRoute
            path="/add-candidate/:id"
            authed={auth.authenticate()}
            exact={true}
            component={AddCompanyCandidate}
          />
          <PrivateRoute
            path="/edit-candidate/:id"
            authed={auth.authenticate()}
            exact={true}
            component={EditCandidateDetails}
          />
          <PrivateRoute
            path="/course"
            authed={auth.authenticate()}
            exact={true}
            component={Courses}
          />
          <PrivateRoute
            path="/add-course"
            authed={auth.authenticate()}
            exact={true}
            component={AddCourseData}
          />
          <PrivateRoute
            path="/edit-course/:id"
            authed={auth.authenticate()}
            exact={true}
            component={EditCourseDetails}
          />
          <PrivateRoute
            path="/sessions"
            authed={auth.authenticate()}
            exact={true}
            component={Session}
          />
          <PrivateRoute
            path="/create-session"
            authed={auth.authenticate()}
            exact={true}
            component={CreateSession}
          />
          <PrivateRoute
            path="/edit-session/:id"
            authed={auth.authenticate()}
            exact={true}
            component={EditSession}
          />
          <PrivateRoute
            path="/logout"
            authed={auth.authenticate()}
            exact={true}
            component={LogoutUser}
          />
          <Route path="/login" component={LoginUser} />
          <Route path="/register" component={RegisterUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  userAuthenticates: state.userAuth.userAuthenticates
});

const Routes = connect(mapStateToProps)(AppRouter);
export default Routes;
