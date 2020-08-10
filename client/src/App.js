import React, { Fragment, useContext } from "react";
import "./App.css";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Navbar from "./Components/layout/Navbar";
import ContactState from "./context/contact/ContextState";
import AuthState from "./context/auth/AuthState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import AlertState from "./context/alert/AlertState";
import setAuthtoken from "./utils/setAuthToken";
import Routing from "./Components/routing/Routing";

if (localStorage.token) {
  setAuthtoken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Routing />
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
