import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/signup.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", navigate: false };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    if (username && password && email) {
      this.signup(username, email, password);
      this.state.navigate = true;
    } else {
      alert("fields cannot be empty");
    }
  };

  signup = async (username, email, password) => {
    const baseUrl =
      "https://luxuriant-ambitious-stone.glitch.me/";
    const signup = `${baseUrl}api/user/signup`;
    axios
      .post(signup, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        alert(res.data + " please login");
        return true;
      })
      .catch((error) => {
        alert("oh oh.. somethin went wrong", error.message);
        console.log(error);
        return false;
      });
  };
  render() {
    return (
      <div id="signup-container">
        <div id="left-side">
          <h4> MYco.ep</h4>
          <h4>Hi there , we help you manage your employees</h4>
        </div>

        <div id="right-side">
          <div id="form-container">
            <form onSubmit={this.handleSubmit} id="myform">
              <div id="top-form">
                <div id="go-under"></div>
                <h3>Register Today </h3>
                <h3>Manage company employees efficiently</h3>
                <p id="mean">
                  Let's get you all set up by making your new profile{" "}
                </p>
              </div>

              <div id="bottom-form">
                <label>user name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="user name "
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />

                <div className="mb-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
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
            already have an account ? <Link to="/login"> log in</Link>
          </p>
        </div>
      </div>
    );
  }
}
