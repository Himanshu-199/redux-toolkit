import React, { useState } from "react";
import { Data } from "./helper";

function Employees() {
  const [dataSetValues, setDataSetValues] = useState({
    employee: Data,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let { employee } = dataSetValues;
  let UpdateState = (id) => {
    let updateId = employee.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      } else {
        return item;
      }
    });
    setDataSetValues({
      ...dataSetValues,
      employee: updateId,
    });
  };
  return (
    <div className="container_employee">
      <div className="container_employee_child">
        <div className="container_employee_upper">
          <div className="upper_button">
            <h2>Employees</h2>
            <p>Data Regarding the Employees are mentioned below</p>
          </div>
          <button onClick={handleOpen} className="btn_add">
            Add Employees
          </button>
        </div>
        <div className="container_employee_lower">
          {employee?.map((item) => {
            return (
              <div key={item.id}>
                <div className="container_employee_lower_outer">
                  <input
                    type="Checkbox"
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
          {employee?.map((item) => {
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

export default Employees;
