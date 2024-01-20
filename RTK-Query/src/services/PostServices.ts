import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from "../models/IPost";

const JsonPlaceholder = 'https://jsonplaceholder.typicode.com/';
const JsonServer = 'https://jsonplaceholder.typicode.com/';

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: JsonServer }),
  endpoints: (build) => ({
      fetchAllPosts: build.query<IPost[], number>({
        query: (limit: number = 5)=>({
           url: `/posts`,
           params:{
            _limit: limit
           }
        })
      })
  })
})