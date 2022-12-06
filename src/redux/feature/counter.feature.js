import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 45,
};
let CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: function (state) {
      state.count = state.count + 1;
    },
    decrement: function (state) {
      state.count = state.count - 1;
    },
    incBy: function (state, action) {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incBy } = CounterSlice.actions;

export default CounterSlice.reducer;
