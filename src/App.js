import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import Error from "./components/Error";
import Test from "./components/Test";
import axios from "axios";
import { UserContext } from "./components/userContext";

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value="false">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="employees" element={<Employee />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
