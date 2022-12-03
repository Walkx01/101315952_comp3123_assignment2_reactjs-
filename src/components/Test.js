import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test(eid) {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({ status: "", message: "", username: "" });
  const [loggedIn, setLoggedIn] = useState();

  const baseUrl =
    "https://101315952comp3123assignment1-production.up.railway.app/";

  const [myemp, setMyEmp] = useState();
  // get employeelist

  const getEmpbyid = (eid) => {
    const emp_by_id = `${baseUrl}api/emp/employees/${eid}`;
    axios
      .get(emp_by_id)
      .then((res) => {
        setMyEmp(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getEmpbyid("634f7782a1a5ff20797044b3");

  return (
    <>
      {!isLoading ? myemp ? <p>{myemp}</p> : <p>not set</p> : <p>loading...</p>}
      <h1> I am test</h1>
    </>
  );
}
