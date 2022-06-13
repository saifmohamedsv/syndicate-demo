import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ isAuth }) => {
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.loggedIn });

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);
