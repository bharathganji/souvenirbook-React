import React, { Component, useEffect, useState } from "react";
import SecView from "./components/SecView";
import DeptView from "./components/DeptView";
import {
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import UserView from "./components/UserView";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { isLoggedIn } from "./services/Auth";
import Protected from "./components/Protected";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIN: null };
  }

  componentDidMount() {
    this.setState({ loggedIN: isLoggedIn() });
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Navigation>
              <Login />
            </Navigation>
          }
        />
        <Route
          path="/home"
          element={
            <Protected>
              <Navbar />
            </Protected>
          }
        >
          <Route path="/home/:year" element={<DeptView />} />
          <Route path="/home/:year/:dept" element={<SecView />} />
          <Route path="/home/:year/:dept/:sec" element={<UserView />} />
        </Route>
      </Routes>
    );
  }
}

const Navigation = ({ children }) => {
  if (isLoggedIn()) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
