import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../redux/slices/blogSlice"


export const store = configureStore({
  reducer:{
    blogs: blogsReducer,
  }
})