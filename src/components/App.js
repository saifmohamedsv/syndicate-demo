import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../Navigation/protectedRoutes";
import Login from "../pages/Login/Login";
import OnLoginRedirect from "../Navigation/navigateOnLogin";
import { OnLogout } from "../store/actions/Logout";
import Home from "../pages/Home/Home";
import Cartificate from "../pages/Cartificate/Cartificate";

function App({ OnLogout, ...props }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<OnLoginRedirect />}>
            <Route path="login" exact element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route index element={<Home />} />
            <Route path="home" exact element={<Home />}>
              <Route path=":id" exact element={<Cartificate />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => ({ isAuth: state.auth.loggedIn });

export default connect(mapStateToProps, { OnLogout })(App);