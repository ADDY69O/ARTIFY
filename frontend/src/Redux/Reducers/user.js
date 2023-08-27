import { createReducer } from "@reduxjs/toolkit";

const inititalState = {};

export const userReducer = createReducer(inititalState, {
  loginRequest: (state, action) => {
    state.loading = true;
    state.isAuthenticate = false;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticate = true;
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticate = false;
  },
  loadUserRequest: (state, action) => {
    state.loading = true;
    state.isAuthenticate = false;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticate = true;
  },
  loadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticate = false;
  },
  AllUserRequest: (state, action) => {
    state.loading = true;
    state.isAuthenticate = false;
  },
  AllUserSuccess: (state, action) => {
    state.loading = false;
    state.allUser = action.payload;
    state.isAuthenticate = true;
  },
  AllUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticate = false;
  },
  followRequest: (state, action) => {
    state.loading = true;
    state.isAuthenticate = false;
  },
  followSuccess: (state, action) => {
    state.loading = false;
    state.follow = action.payload;
    state.isAuthenticate = true;
  },
  followFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticate = false;
  },
  singleUserRequest: (state, action) => {
    state.loading = true;
    state.isAuthenticate = false;
  },
  singleUserSuccess: (state, action) => {
    state.loading = false;
    state.single = action.payload;
    state.isAuthenticate = true;
  },
  singleUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticate = false;
  },
});


