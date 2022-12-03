import React from "react";
import { useState } from "react";
import axios from "axios";

export default function ViewEmployee(emp_id) {
  const [myemp, setMyEmp] = useState();
  const [isLoading, setLoading] = useState(true);
  const baseUrl =
    "https://101315952comp3123assignment1-production.up.railway.app/";

  // get employeelist

  const getEmpbyid = ( emp_id ) => {
    console.log(emp_id);
    const emp_by_id = `${baseUrl}api/emp/employees/${emp_id}`;
    console.log("url:" + emp_by_id);
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
  getEmpbyid(emp_id);

  isLoading ? <div>loading</div> : <div> i am employee details</div>;
}
