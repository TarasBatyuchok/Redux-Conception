import { createSlice } from "@reduxjs/toolkit";



const blogSlice = createSlice({
  name: "blogs",
  initialState:[],
  reducers: {

    addPostsBlog(state, action) {
      return action.payload;  // Просто замінюємо весь масив на нові дані
    },
  }
})

export const {addPostsBlog} = blogSlice.actions;
export default blogSlice.reducer;


