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
  postList: [],
  post: {},
  togList: [],
  postDitails: {},
};

export const getAllPosts = createAsyncThunk(
  "user/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const resp = await customFetch.get("/post/", {
        headers: {
          authorization: `Token ${getUserTokenFromLocalStorage()}`,
        },
      });
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
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getPostDitails = createAsyncThunk(
  "post/getPostDitails",
  async ({ postId }, thunkAPI) => {
    try {
      const resp = await customFetch.get(`/post/${postId}/`, {
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
    [getPostDitails.fulfilled]: (state, { payload }) => {
      state.postDitails = payload;
      console.log("🚀 ~ payload", payload);
    },
    // GET ALL POSTS
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.postList = payload;
    },
    // GET TAG LIST
    [getTagList.fulfilled]: (state, { payload }) => {
      state.tagList = payload;
      console.log(state.tagList);
    },
    // ADD POST
    [addPost.fulfilled]: (state, { payload }) => {
      state.post = payload;
    },
  },
});

export default userSlice.reducer;
