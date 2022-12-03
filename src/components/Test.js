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

  async function signup() {
    const signup = `${baseUrl}api/user/signup`;
    axios
      .post(signup, {
        username: "Walker",
        password: "Helloworld",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  signup();
  return (
    <>
      <h1> I am test</h1>
    </>
  );
}
