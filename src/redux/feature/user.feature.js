import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  errorMessage: null,
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  let Api = `https://jsonplaceholder.typicode.com/users`;
  const response = await axios.get(Api);
  return response.data;
});

const userListSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
        state.errorMessage = "Oops SomeThing went wrong";
      });
  },
});

export default userListSlice.reducer;
