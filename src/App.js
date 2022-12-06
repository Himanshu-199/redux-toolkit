import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./header";
import React from "react";
import CounterRed from "./CounterRed";
import EmployeesRedux from "./Employees.Redux";
import Employees from "./Employees";
import User from "./User";
import UserRedux from "./UserRedux";
function App() {

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<UserRedux />} />
        <Route path="/user" element={<User />} />
        <Route path="/counter" element={<CounterRed />} />
        <Route path="/employees" element={<EmployeesRedux />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
