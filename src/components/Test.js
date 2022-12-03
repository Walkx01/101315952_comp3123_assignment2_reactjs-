import React, { useEffect, useState } from "react";
import axios from "axios";
import { getEmployees } from "./Connect.js";

export default function Test() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({ status: "", message: "", username: "" });
  const [loggedIn, setLoggedIn] = useState();

  /* {
  "first_name": "Jhon ",
  "last_name": "doe",
  email: jhondoeemailemployee@gmail.com,
  gender: male ,
  salary:50000.00,
}*/
  function addemployee([firstname, lastname, email, gender, salary]) {
    const baseUrl =
      "https://101315952comp3123assignment1-production.up.railway.app/";
    const signup = `${baseUrl}api/emp/employees`;
    axios
      .post(signup, {
        first_name: firstname,
        last_name: lastname,
        email: email,
        gender: gender,
        salary: salary,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert("oh oh.. somethin went wrong" + error.message);
        console.log(error);
      });
  }

  //   addemployee(["walker", "altidor", "myemail@gmail.com", "Male", "50000"]);

  async function Loginuser(username, password) {
    const baseUrl =
      "https://101315952comp3123assignment1-production.up.railway.app/";
    const signin = `${baseUrl}api/user/login`;
    await axios
      .post(signin, {
        username: username,
        password: password,
      })
      .then((res) => {
        {
          !res.data.status
            ? alert(res.data.message)
            : setLoggedIn(res.data.status);
        }
        setLoading(false);
      })
      .catch((error) => {
        alert("oh oh.. somethin went wrong " + error.response.data.message);
        console.log(error);
      });
  }

  Loginuser("Mary Jane", "maryjanepassword");

  return (
    <>
      {!isLoading && loggedIn ? <p> you are now logged in</p> : <></>}
      <h1> I am test</h1>
    </>
  );
}
