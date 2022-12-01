import React, { Component } from "react";
import "../css/signup.css";

export default class SignUp extends Component {
  render() {
    return (
      <div id="signup-container">
        <div id="left-side">
          <h4> MYco.ep</h4>
          <h4>Hi there , we help you manage your employees</h4>
        </div>

        <div id="right-side">
          <div id="form-container">
            <form id="myform">
              <div id="top-form">
                <div id="go-under"></div>
                <h3>Register Today </h3>
                <h3>Manage company employees efficiently</h3>
                <p>Let's get you all set up by making your new profile </p>
              </div>

              <div id="bottom-form">
                <label>user name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="user name "
                />

                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
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
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p id="link">
            already have an account ? <a href=""> log in</a>
          </p>
        </div>
      </div>
    );
  }
}
