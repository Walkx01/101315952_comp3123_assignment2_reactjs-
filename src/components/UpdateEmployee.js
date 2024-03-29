import React, { useState, useEffect } from "react";
import "../css/addemployee.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UpdateEMployee() {
  // grab id from path param
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [employeeData, setemployeeData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    salary: "",
  });

  const baseUrl = "https://luxuriant-ambitious-stone.glitch.me/";
  const navigate = useNavigate();

  // get employee
  useEffect(() => getEmpbyid(id), []);

  const getEmpbyid = (emp_id) => {
    const emp_by_id = `${baseUrl}api/emp/employees/${emp_id}`;
    axios
      .get(emp_by_id)
      .then((res) => {
        setemployeeData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function update_emp(id) {
    const { first_name, last_name, email, gender, salary } = employeeData;
    const baseUrl = "https://luxuriant-ambitious-stone.glitch.me/";
    const update_emp = `${baseUrl}api/emp/employees/${id}`;
    axios
      .put(update_emp, {
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
        console.log(error);
      });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    update_emp(id);

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
          <h3> Update employee</h3>
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
            required
          />

          <label htmlFor=""> Last Name</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            value={employeeData.last_name}
            onChange={(e) => handleChange(e)}
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
            update
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
