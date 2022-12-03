import React, { useContext, useState, useEffect } from "react";
import "../css/Employee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, redirect } from "react-router-dom";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";
import ViewEmployee from "./ViewEmployee";
import axios from "axios";

export default function Employee() {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [isLoading, setLoading] = useState(true);
  const [employeeList, setEmployeeList] = useState(null);
  const navigate = useNavigate();
  var idselected = null;

  const baseUrl =
    "https://101315952comp3123assignment1-production.up.railway.app/";

  const handleLogout = (e) => {
    localStorage.clear();
    //  redirect to log in
    {
      console.log(" logging you out now");
      navigate("/login");
    }
  };

  const deleteEmpBId = (id) => {
    const deleteemp = `${baseUrl}api/emp/employees/${id}`;
    axios
      .delete(deleteemp)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmDelete = (id) => {
    let answer = window.confirm("are you sure you want to delete?");
    if (answer) {
      deleteEmpBId(id);
    }
  };
  // get employeelist
  useEffect(() => {
    const employees = `${baseUrl}api/emp/employees`;
    axios
      .get(employees)
      .then((res) => {
        setEmployeeList(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const loggedInUser = localStorage.getItem("user");
  if (isLoading) {
    return <div> loading.... if more than 5sec please refresh</div>;
  }
  if (loggedInUser) {
    if (employeeList) {
      return (
        <div id="emp-container">
          <div id="emp-top">
            <div id="emp-top-left">
              <h2>Employee Management</h2>
              <h5>
                Manage all your existing employees or
                <Link
                  className="btn btn-primary"
                  id="emp-add-new"
                  to="/addemployee"
                >
                  add new Employee
                </Link>{" "}
              </h5>
            </div>
            <div id="emp-top-right">
              <button
                onClick={(e) => handleLogout(e)}
                className="btn btn-primary"
                id="linkbtn"
              >
                log out
              </button>
            </div>
          </div>
          <div id="emp-bottom">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((val) => (
                  <tr key={val._id}>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.email}</td>
                    <td id="emp-action">
                      <button
                        onClick={() => navigate(`/updateemployee/${val._id}`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>
                      <button onClick={() => confirmDelete(val._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => navigate(`/viewemployee/${val._id}`)}
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div id="emp-container">
          <div id="emp-top">
            <div id="emp-top-left">
              <h2>Employee Management</h2>
              <h6>Manage all your existing employees or add new employee </h6>
            </div>
            <div id="emp-top-right">
              <button className="btn btn-primary"> add new Employee</button>
            </div>
          </div>
          <div id="no-emp-bottom">
            <div id="empty-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <div>
              <h4>
                looks like we don't have any employees in our system to display
              </h4>
              <h4>Start by adding an employee to start </h4>
              {/* <button > add new Employee</button> */}
              <Link className="btn btn-primary" id="linkbtn" to="/addemployee">
                add new Employee
              </Link>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <>access denied</>;
  }
}
