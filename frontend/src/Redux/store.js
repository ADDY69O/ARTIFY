import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./Reducers/Post";
import { userReducer } from "./Reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  }, // Reducers go here.
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false, // Disable serializable state checking
  //     }),
});

export default store;
