import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import UpdateEMployee from "./components/UpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";
import Error from "./components/Error";
import Test from "./components/Test";
import { UserContext } from "./components/userContext";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="employees" element={<Employee />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="updateemployee/:id" element={<UpdateEMployee />} />
          <Route path="viewemployee/:id" element={<ViewEmployee />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
