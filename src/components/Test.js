import React, { useEffect } from "react";
import axios from "axios";
import { getEmployees } from "./Connect.js";

export default function Test() {
  const baseUrl =
    "https://101315952comp3123assignment1-production.up.railway.app/";
  async function getEmps() {
    const employees = `${baseUrl}api/emp/employees`;

    axios
      .get(employees)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

   function Login(username, password) {
    const baseUrl =
      "https://101315952comp3123assignment1-production.up.railway.app/";
    const signin = `${baseUrl}api/user/login`;
    axios
      .post(signin, {
        username: username,
        password: password,
      })
      .then((res) => {
        return res.data.status;
      })
      .catch((error) => {
        console.log("oh oh.. somethin went wrong " + error);
        return false;
      });
  }
  const result = Login("Mary Jane", "maryjanepassword");
  console.log(result);

  return (
    <>
      <h1> I am test</h1>
    </>
  );
}
