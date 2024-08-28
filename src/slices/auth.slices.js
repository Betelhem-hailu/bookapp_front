import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.services";

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await authService.register(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await authService.login(email, password);
      console.log(data);
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
    isLoggedIn: false,
    user:
      typeof window !== "undefined" && localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    loading: false,
    data: [],
    error: null,
    msg: null
  };
  

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(register.fulfilled, (state, { payload }) => {
          state.isLoggedIn = false;
          state.msg = payload.data;
        })
        .addCase(register.rejected, (state, {payload}) => {
          state.isLoggedIn = false;
          state.error = payload;
        }) 
        .addCase(login.fulfilled, (state, { payload }) => {
          state.isLoggedIn = true;
          state.loading = false;
          state.user = payload.data;
          state.error = null;
          if (typeof window !== "undefined") {
            localStorage.setItem("userInfo", JSON.stringify(payload.data));
          }
        })
        .addCase(login.pending, state => {
          state.loading = true;
          state.error = null;
        })
        .addCase(login.rejected, (state, { payload }) => {
          state.isLoggedIn = false;
          state.loading = false;
          state.user = null;
          state.error = payload;
        });
    }
});


export const { reducer } = authSlice.actions;
export default authSlice.reducer;