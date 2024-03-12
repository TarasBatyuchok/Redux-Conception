import { configureStore } from '@reduxjs/toolkit';
import { goodsAPI } from './goodsApi.js';

export const store = configureStore({
    reducer: {
        [goodsAPI.reducerPath]: goodsAPI.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(goodsAPI.middleware)
});