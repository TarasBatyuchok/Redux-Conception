import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    addPostsBlog(state, action) {
      return action.payload;
    },
  },
});

export const { addPostsBlog } = blogSlice.actions;
export default blogSlice.reducer;
