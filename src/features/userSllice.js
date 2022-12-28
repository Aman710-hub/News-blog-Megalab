import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";
import {
  getUserFromLocalStorage,
  getUserTokenFromLocalStorage,
  removeFromLocalStorage,
  setUserTokenToLocalStorage,
  setUserToLocalStorage,
} from "../utils/localStorage";

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  userData: {},
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/registration/", user);
      // console.log(user, resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      if (error.response.data.non_field_errors) {
        return thunkAPI.rejectWithValue(
          error.response.data.non_field_errors[0]
        );
      }
      if (error.response.data.nickname) {
        return thunkAPI.rejectWithValue(error.response.data.nickname[0]);
      }
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/login/", user);
      console.log(resp.data.token);
      console.log(user);
      console.log(thunkAPI.getState);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getUser = createAsyncThunk(
  "user/getUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.get("/user/", {
        headers: {
          authorization: `Token ${getUserTokenFromLocalStorage()}`,
        },
      });
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// const nav = useNavigate();

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      // setUserToLocalStorage(payload);
      toast.success(`Добро пожаловать ${payload.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
      state.user = null;
    },
    // login
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      setUserTokenToLocalStorage(payload.token);
      state.token = payload.token;
      state.user = state.user;
      // toast.success(`С возврвшением`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error("Неверный пользователь");
    },
    // get user
    [getUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      // state.userData = payload;\
      setUserToLocalStorage(payload);
      toast.success("get data");
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;

// fetch(
//         "https://megalab.pythonanywhere.com/registration/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: "aman",
//             last_name: "ama",
//             nickname: "ni",
//             password: "111",
//             password2: "111",
//           }),
//         }
//       )
//         .then((response) => {
//           response.json();
//         })
//         .then((res) => {
//           console.log(res);
//         });
