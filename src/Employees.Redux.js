import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelected } from "./redux/feature/employees.feature";

function EmployeesRedux() {
  let employees1 = useSelector((state) => {
    return state.employees;
  });
  const dispatch = useDispatch();
  let { employees } = employees1;
  const UpdateState = (id) => {
    dispatch(updateSelected(id));
  };
  return (
    <div className="container_employee">
      <div className="container_employee_child">
        <div className="container_employee_upper">
          <h2>Employees</h2>
          <p>Data Regarding the Employees are mentioned below</p>
        </div>
        <div className="container_employee_lower">
          {employees?.map((item) => {
            return (
              <div key={item.id}>
                <div className="container_employee_lower_outer">
                  <input
                    type="Checkbox"
                    checked={item.isSelected}
                    onChange={() => UpdateState(item.id)}
                  />
                  <span>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="selected_container_parent">
        <div className="selected_container">
          {employees?.map((item) => {
            return (
              <div key={item.id}>
                {item.isSelected && (
                  <div className="container_employee_lower_outer intend">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EmployeesRedux;
