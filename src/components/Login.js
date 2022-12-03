import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../css/login.css";
import icon from "./icon9.png";
import { useState } from "react";
import { UserContext } from "./userContext";
import { redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState();
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(true);

  async function Loginuser(username, password) {
    const baseUrl =
      "https://101315952comp3123assignment1-production.up.railway.app/";
    const signin = `${baseUrl}api/user/login`;
    axios
      .post(signin, {
        username: username,
        password: password,
      })
      .then((res) => {
        {
          !res.data.status ? alert(res.data.message) : setUser(res.data);
          // store the user in localStorage
          if (res.data.status) {
            setLoggedIn(true);
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log("logged in successfully from function");
          }
        }
        setLoading(false);
      })
      .catch((error) => {
        alert("oh oh.. somethin went wrong " + error.response.data.message);
        console.log(error);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      Loginuser(username, password);
    } else {
      alert("fields cannot be empty");
    }
  };

  // Check if a user has previously logged in localstorage each time app loads
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setLoggedIn(true);
      setUser(foundUser);
    }
  }, []);

  //  redirect to employees page if logged in
  {
    const navigate = useNavigate();
    if (user) {
      console.log(" yoi are logged in trying to redirect");
      navigate("/employees");
    }
  }

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
