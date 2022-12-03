import React, { useEffect, useState } from "react";
import axios from "axios";
import { getEmployees } from "./Connect.js";

export default function Test() {
  const [isLoading, setLoading] = useState(true);
  const [employeeList, setEmployeeList] = useState();

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

  addemployee(["walker", "altidor", "myemail@gmail.com", "Male", "50000"]);

  return (
    <>
      <h1> I am test</h1>
    </>
  );
}
