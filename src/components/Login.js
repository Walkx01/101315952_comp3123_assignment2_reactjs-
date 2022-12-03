import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../css/login.css";
import icon from "./icon9.png";
import { useState } from "react";
import { UserContext } from "./userContext";
import { redirect } from "react-router-dom";

export default function Login() {
  const user = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    if (true) {
      setLoggedIn = true;
    } else {
      alert("wrong user name or password");
    }
  };

  // if user is already logged in but navigate to login page redirect to home/employee page
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/employees");
    }
  });

  return (
    <div id="signup-container">
      <div id="left-side">
        <h4> MYco.ep</h4>
        <h4>Hi there , we help you manage your employees</h4>
      </div>

      <div id="right-side">
        <div id="form-container">
          <form
            id="login-myform"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div id="login-top-form">
              <h3>Start managing company employees efficiently</h3>
              <img id="icon" src={icon} alt="" />
            </div>

            <div id="bottom-form">
              <label>user name</label>
              <input
                type="text"
                className="form-control"
                placeholder="user name "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Log in Now
                </button>
              </div>
            </div>
          </form>
        </div>
        <p id="link">
          Don't have an account ? <Link to="/signup"> Sign Up !</Link>
        </p>
      </div>
    </div>
  );
}
