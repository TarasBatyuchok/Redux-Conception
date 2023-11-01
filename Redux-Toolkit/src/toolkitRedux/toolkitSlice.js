import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  // A name, used in action types
  name: "toolkit",
  // The initial state for the reducer
  initialState: {
    customers: [],
    count: 0,
  },
  // 
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addTodo(state, action) {
      state.customers.push(action.payload);
    },
    removeCustomer(state, action) {
      state.customers = state.customers.filter((customer) => {
         return customer.id !== action.payload;
      });

      // state.customers = state.customers.filter(
      //   (customer) => customer.id !== action.payload
      // );
    },
    addCustomers(state, action) {
      state.customers = action.payload;
    },
  },
});

export default toolkitSlice.reducer;

export const { increment, decrement, addTodo, removeCustomer, addCustomers } =
  toolkitSlice.actions;
