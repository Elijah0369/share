import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {},
  userPosts: []
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
    getUserPosts(state, action) {
      state.userPosts = action.payload;
    },
  },
});

export default postSlice.reducer;

export function SetPosts(post) {
  return (dispatch, getState) => {
    dispatch(postSlice.actions.getPosts(post));
  };
}

export function SetUserPosts(post) {
  return (dispatch, getState) => {
    dispatch(postSlice.actions.getUserPosts(post));
  };
}