import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserTokenFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  postList: [],
  post: {},
  togList: [],
  postDitails: {},
  is_liked: null,
  likedPostList: [],
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
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const likePost = createAsyncThunk(
  "post/likePost",
  async (postId, thunkAPI) => {
    console.log("🚀 ~ postId", postId);
    try {
      const resp = await customFetch.post(
        "/like/",
        { post: postId },
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
export const getLikedPosts = createAsyncThunk(
  "post/getLikedPosts",
  async (postId, thunkAPI) => {
    try {
      const resp = await customFetch.get("/like/", {
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

// const nav = useNavigate();

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    likePostReducer: (state, { payload }) => {
      // state.is_liked_postList = payload;
      // state.is_liked_postList = !state.is_liked_postList;
      state.is_liked = !state.is_liked;
    },
  },
  extraReducers: {
    [getLikedPosts.fulfilled]: (state, { payload }) => {
      state.likedPostList = payload;
    },
    // GET POST DITAILS
    [getPostDitails.fulfilled]: (state, { payload }) => {
      state.postDitails = payload;
      state.is_liked = payload.is_liked;
    },
    // GET ALL POSTS
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.postList = payload;
    },
    // GET TAG LIST
    [getTagList.fulfilled]: (state, { payload }) => {
      state.tagList = payload;
    },
    // ADD POST
    [addPost.fulfilled]: (state, { payload }) => {
      state.post = payload;
    },
  },
});
export const { likePostReducer, getLikes } = newsSlice.actions;
export default newsSlice.reducer;
