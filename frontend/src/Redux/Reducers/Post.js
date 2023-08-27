import { createReducer } from "@reduxjs/toolkit";

const inititalState = {};

export const postReducer = createReducer(inititalState, {
  loadPostsRequest: (state, action) => {
    state.loading = true;
  },
  loadPostsSuccess: (state, action) => {
    state.loading = false;
    state.posts = action.payload;
  },
  loadPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  loadmyPostsRequests: (state, action) => {
    state.loading = true;
  },
  loadmyPostsSuccess: (state, action) => {
    state.loading = false;
    state.Myposts = action.payload;
  },
  loadmyPostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  likePostsRequest: (state, action) => {
    state.loading = true;
  },
  likePostsSuccess: (state, action) => {
    state.loading = false;
    state.Like = action.payload;
  },
  likePostsFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  addCommentRequest: (state, action) => {
    state.loading = true;
  },
  addCommentSuccess: (state, action) => {
    state.loading = false;
    state.Comment = action.payload;
  },
  addCommentFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  addCreatePostRequest: (state, action) => {
    state.loading = true;
  },
  addCreatePostSuccess: (state, action) => {
    state.loading = false;
    state.createPost = action.payload;
  },
  addCreatePostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  deletePostRequest: (state, action) => {
    state.loading = true;
  },
  deletePostSuccess: (state, action) => {
    state.loading = false;
    state.deletePost = action.payload;
  },
  deletePostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
