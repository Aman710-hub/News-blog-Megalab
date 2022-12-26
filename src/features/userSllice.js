import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";
import {
  getUserFromLocalStorage,
  removeFromLocalStorage,
  setUserToLocalStorage,
} from "../utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
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
      // const { user } = payload;
      console.log(payload.name);
      setUserToLocalStorage(payload);
      toast.success(`Добро пожаловать ${payload.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
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
