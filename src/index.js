import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import reportWebVitals from "./reportWebVitals";
import Employee from "./components/Employee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Employee />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
