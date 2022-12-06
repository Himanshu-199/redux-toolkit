import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../helper";
const initialState = {
  employees: Data,
};
const employeeSlice = createSlice({
  name: "Employee",
  initialState,
  reducers: {
    updateSelected: function (state, action) {
      state.employees = state.employees.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isSelected: !item.isSelected,
          };
        } else {
          return item;
        }
      });
    },
  },
});

export const { updateSelected } = employeeSlice.actions;
export default employeeSlice.reducer;
