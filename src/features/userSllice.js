import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../utils/axios";

const initialState = {
  isLoading: false,
  user: "h",
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/registration/", user);
      console.log(user, resp);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.non_field_errors[0]);
    }
  }
);

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
      // toast.success(`Hello`);
      // console.log(payload);
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
