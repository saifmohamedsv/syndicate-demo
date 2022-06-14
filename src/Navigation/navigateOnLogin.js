import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const OnLoginRedirect = ({ isAuth }) => {
  const location = useLocation();
  return isAuth ? (
    <Navigate to="/" replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.loggedIn });

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(OnLoginRedirect);
