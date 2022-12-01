import React from "react";
import "../css/addemployee.css";

export default function AddEmployee() {
  return (
    <div id="add-emp-container">
      <div id="top"> img</div>

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
        <input class="form-control" type="text" />

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
