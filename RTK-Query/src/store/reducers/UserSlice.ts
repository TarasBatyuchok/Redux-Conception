import { IUser } from "../../models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreator";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
    // usersFetching(state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   (state.error = ""), (state.users = action.payload);
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  // extraReducers: {
  //   [fetchUsers.fulfilled?.type]: (state: any, action: PayloadAction<IUser[]>) => {
  //       state.isLoading = false;
  //       state.error = ''
  //       state.users = action.payload;
  //   },
  //   [fetchUsers.pending?.type]: (state: any) => {
  //       state.isLoading = true;
  //   },
  //   [fetchUsers.rejected?.type]: (state: any,  action: PayloadAction<string>) => {
  //       state.isLoading = false;
  //       state.error = action.payload
  //   },
  // }
  extraReducers: (builder) =>  {
    builder
      .addCase(fetchUsers.fulfilled, (state: UserState, action: PayloadAction<IUser[]>) =>{
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
      })
      .addCase(fetchUsers.pending, (state: UserState) =>{
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, ( state: UserState, action:  any) =>{
        state.isLoading = false;
        state.error = action.payload;
      })
}
});

export default userSlice.reducer;
