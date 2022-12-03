import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewEmployee() {
  const [myemp, setMyEmp] = useState();
  const [isLoading, setLoading] = useState(true);
  const baseUrl =
    "https://101315952comp3123assignment1-production.up.railway.app/";

  const { id } = useParams();
  const emp_id = id;
  // get employee

  useEffect(() => getEmpbyid(emp_id), []);
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

  const loggedInUser = localStorage.getItem("user");
  if (!loggedInUser) {
    return <>access denied</>;
  } else {
    if (isLoading) {
      return <div> loading please wait or refresh</div>;
    }
    return (
      <>
        <h3>Employee details</h3>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Firstname</th>
              <td>{myemp.first_name}</td>
            </tr>
            <tr>
              <th scope="col">LastName</th>
              <td>{myemp.last_name}</td>
            </tr>
            <tr>
              <th scope="col">Email</th>
              <td>{myemp.email}</td>
            </tr>
          </thead>
        </table>
        <Link className="btn btn-primary" id="linkbtn" to={"/employees"}>
          back home
        </Link>
      </>
    );
  }
}
