import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { userReducer } from './userSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authApi.middleware),
});
