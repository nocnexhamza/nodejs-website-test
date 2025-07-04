import React from "react";
import { logoutUser } from "./actions/auth";
import { Redirect, Route } from "react-router";
import hasToken from "./services/authService";

export const AdminRoute = ({ currentUser, dispatch, component, ...rest }) => {
  if (!currentUser || currentUser.role !== 'admin' || !hasToken()) {
    return (<Redirect to="/template"/>)
  } else if (currentUser && currentUser.role === 'admin') {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
  }
};

export const UserRoute = ({ dispatch, component, ...rest }) => {
  if (!hasToken()) {
    dispatch(logoutUser());
    return (<Redirect to="/login"/>)
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    );
  }
};

export const AuthRoute = ({ dispatch, component, ...rest }) => {
  const { from } = rest.location.state || { from: { pathname: '/template'} };

  if (hasToken()) {
    return (
      <Redirect to={from} />
    );
  } else {
    return (
      <Route {...rest} render={props => (React.createElement(component, props))}/>
    )
  }
}
