import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ValidateUser } from "../../Utilities/api/auth";

// Action
export const AuthUser = createAsyncThunk("AuthUser", async (loginCredentials) => {
  const response = await ValidateUser(loginCredentials);
  return response;
});

const initialState = {
  isLoading: false,
  UserData: [],
  loginStatus: false,
  isError: false,
};
const authSlice = createSlice({
  name: "userData",
  initialState,
  reducers : {
    handleLogoutState : (state , action) => {
      state.loginStatus = false;
      state.UserData = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(AuthUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.loginStatus = true;
    });
    builder.addCase(AuthUser.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
      state.loginStatus = false;
    });
  },
});

export const { handleLogoutState } = authSlice.actions;
export default authSlice.reducer;
