
import {AppDispatch} from "../store.ts";
import axios from "axios";
import { IUser } from '../../models/IUser.ts';
import { userSlice } from "./UserSlice.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers: any = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         console.log(response)
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            // const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/user2s')
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)
