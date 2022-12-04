import React, { useState } from "react";
import "../css/addemployee.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AddEmployee() {
  const [employeeData, setemployeeData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "Other",
    salary: "",
  });
  const navigate = useNavigate();

  function addemployee() {
    const { first_name, last_name, email, gender, salary } = employeeData;
    const baseUrl =
      "https://101315952comp3123assignment1-production.up.railway.app/";
    const signup = `${baseUrl}api/emp/employees`;
    axios
      .post(signup, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender,
        salary: salary,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        if (error.response.data)
          alert("error: employee not added: email already exists");

        console.log(error);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addemployee();
    navigate("/employees");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setemployeeData({
      ...employeeData,
      [e.target.name]: value,
    });
  };

  const loggedInUser = localStorage.getItem("user");

  if (loggedInUser) {
    return (
      <div id="add-emp-container">
        <div id="top">
          <h3>Add new employee</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
          </svg>
        </div>

        <form onSubmit={handleSubmit} id="add-emp-form" action="">
          <label className="label" htmlFor="">
            FirstName
          </label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            value={employeeData.first_name}
            onChange={(e) => handleChange(e)}
            maxLength="100"
            required
          />

          <label htmlFor=""> Last Name</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            value={employeeData.last_name}
            onChange={(e) => handleChange(e)}
            maxLength="50"
            required
          />
          <label htmlFor=""> Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={employeeData.email}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="gender">Cender:</label>
          <select name="gender" onChange={(e) => handleChange(e)} required>
            <option value="Other">other</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="">salary</label>
          <input
            type="number"
            className="form-control input-add-emp"
            placeholder="salary"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="salary"
            value={employeeData.salary}
            onChange={(e) => handleChange(e)}
            required
          />
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <Link className="btn btn-primary" id="linkbtn2" to="/employees">
            Go back
          </Link>
        </form>
      </div>
    );
  } else {
    return <div>access denied</div>;
  }
}
