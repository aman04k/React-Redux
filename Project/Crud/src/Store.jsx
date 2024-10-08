import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserReducer";  // Adjust the path if necessary

const store = configureStore({
  reducer: {
    users: userReducer
  }
});

export default store;
