import React from 'react';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const goodsAPI = createApi({
     reducerPath: 'goodsAPI',
     baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
     endpoints: (build) => ({
        getGoods: build.query({
            // в консолі ми можемо побачити як rtk кешує дані і відпрацьовує один fetch
            // ми приймаємо limit який передаэться в query
            query: (limit= '')=> `posts?${limit && `_limit=${limit}`}`,
        })
     })
})

export const {useGetGoodsQuery} = goodsAPI;