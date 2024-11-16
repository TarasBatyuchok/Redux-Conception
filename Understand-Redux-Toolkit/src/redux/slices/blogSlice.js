import { createSlice } from "@reduxjs/toolkit";


const  initialState = [
  {
    id: "1",
    title: "Basic Redux-Toolkit",
    body:
      "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux",
    response: {
      like: 0,
      unlike: 0,
    },
  },
  {
    id: "2",
    title: "React Redux",
    body:
      "React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React.",
    response: {
      like: 0,
      unlike: 0,
    },
  },
];

const blogSlice = createSlice({
  nome: "blogs",
  initialState,
  reducers: {}
})


export default blogSlice.reducer