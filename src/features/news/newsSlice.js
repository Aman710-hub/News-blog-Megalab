import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserTokenFromLocalStorage } from "../../utils/localStorage";

// import {
//   getUserFromLocalStorage,
//   getUserTokenFromLocalStorage,
//   removeFromLocalStorage,
//   setUserTokenToLocalStorage,
//   setUserToLocalStorage,
// } from "../utils/localStorage";
const initialState = {
  isLoading: false,
  news: [],
  post: {},
  togList: [],
};

export const getAllPosts = createAsyncThunk(
  "user/getAllPosts",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.get(
        "/post/?search=some_text&tag=tag_text&author=author_nickname",
        {
          headers: {
            authorization: `Token ${getUserTokenFromLocalStorage()}`,
          },
        }
      );
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const addPost = createAsyncThunk(
  "post/addPost",
  async (postData, thunkAPI) => {
    try {
      const resp = await customFetch.post(
        "https://megalab.pythonanywhere.com/post/",
        postData,
        {
          headers: {
            authorization: `Token ${getUserTokenFromLocalStorage()}`,
          },
        }
      );
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getTagList = createAsyncThunk(
  "post/getTagList",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get(
        "https://megalab.pythonanywhere.com/tag/",
        {
          headers: {
            authorization: `Token ${getUserTokenFromLocalStorage()}`,
          },
        }
      );
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
    [getTagList.fulfilled]: (state, { payload }) => {
      state.tagList = payload;
      console.log(state.tagList);
    },
    // ADD POST
    [addPost.fulfilled]: (state, { payload }) => {
      state.post = payload;
    },
    // login
    //  [loginUser.pending]: (state) => {
    //    state.isLoading = true;
    //  },
    //  [loginUser.fulfilled]: (state, { payload }) => {
    //    state.isLoading = false;
    //    setUserTokenToLocalStorage(payload.token);
    //    toast.success(`С возврвшением`);
    //  },
    //  [loginUser.rejected]: (state, { payload }) => {
    //    state.isLoading = false;
    //    toast.error("Неверный пользователь");
    //  },
  },
});

export default userSlice.reducer;
