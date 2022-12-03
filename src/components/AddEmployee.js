import React from "react";
import "../css/addemployee.css";

export default function AddEmployee() {
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

      <form id="add-emp-form" action="">
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="form-control input-add-emp"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

        <label className="label" htmlFor="">
          FirstName
        </label>
        <input className="form-control" type="text" />

        <label htmlFor=""> Last Name</label>
        <input className="form-control" type="text" />
        <label htmlFor=""> Email</label>
        <input className="form-control" type="text" />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
