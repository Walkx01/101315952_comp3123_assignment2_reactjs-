import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styles from "../css/login.css";
import icon from "./icon9.png";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.prevenDefault();
    console.log(username, " pass ", password);
  };
  return (
    <div id="signup-container">
      <div id="left-side">
        <h4> MYco.ep</h4>
        <h4>Hi there , we help you manage your employees</h4>
      </div>

      <div id="right-side">
        <div id="form-container">
          <form id="login-myform" onSubmit={handleSubmit}>
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
              />

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  <Link id="linkbtn" to="/employees">
                    {" "}
                    Log in Now
                  </Link>
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
