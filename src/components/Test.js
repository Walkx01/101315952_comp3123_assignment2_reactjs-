import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Test() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({ status: "", message: "", username: "" });
  const [loggedIn, setLoggedIn] = useState();

  
  const baseUrl =
    "https://101315952comp3123assignment1-production.up.railway.app/";

  const [myemp, setMyEmp] = useState();
  // get employeelist

  const { emp_id } = useParams();
  const getEmpbyid = (emp_id) => {
    const emp_by_id = `${baseUrl}api/emp/employees/${emp_id}`;
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

  return (
    <>
      <button onClick={() => getEmpbyid()}>
        get employee
      </button>
      {!isLoading ? (
        myemp ? (
          console.log(myemp)
        ) : (
          <p>not set</p>
        )
      ) : (
        <p>loading...</p>
      )}
      <h1> I am test</h1>
    </>
  );
}
