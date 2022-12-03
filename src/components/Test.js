import React, { useEffect, useState } from "react";
import axios from "axios";

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
  function addemployee(data) {
    const baseUrl =
      "https://101315952comp3123assignment1-production.up.railway.app/";
    const signup = `${baseUrl}api/emp/employees`;
    axios
      .post(signup, data)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const data = {
    first_name: "Walker",
    last_name: "Altidor",
    email: "dfsergdthfyg@gmail.co4",
    gender: "Female",
    salary: "23453",
  };

  addemployee(data);

  return (
    <>
      {!isLoading && loggedIn ? <p> you are now logged in</p> : <></>}
      <h1> I am test</h1>
    </>
  );
}
