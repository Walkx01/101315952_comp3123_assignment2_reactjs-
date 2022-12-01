import React, { Component } from "react";
import styles from "../css/login.css";
import account from "./account.png";
import anim from "./icons8.gif";
import icon from "./icon9.png";
export default class Login extends Component {
  render() {
    return (
      <div id="signup-container">
        <div id="left-side">
          <h4> MYco.ep</h4>
          <h4>Hi there , we help you manage your employees</h4>
        </div>

        <div id="right-side">
          <div id="form-container">
            <form id="login-myform">
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
                    Log in Now
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p id="link">
            Don't have an account ? <a href=""> Sign Up !</a>
          </p>
        </div>
      </div>
    );
  }
}
