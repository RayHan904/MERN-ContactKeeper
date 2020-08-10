import React, { useState, useContext, useEffect, Fragment } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

import Alert from "../layout/Alert";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const {
    register,
    error,
    clearErrors,
    isAuthenticated,
    loading,
  } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const { name, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Please Enter all the fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords don't match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <Fragment>
      <Alert />
      <div className="form-container">
        <h2>
          Account <span className="text-primary">Register</span>
        </h2>
        <form onSubmit={onSubmit}>
          <label className="form-group" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
          <label className="form-group" htmlFor="Email">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <label className="form-group" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <label className="form-group" htmlFor="password2">
            ConfirmPassword
          </label>
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={password2}
            onChange={onChange}
          />

          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
