import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { userReducer } from './userSlice';
import { gamesReducer } from './gamesSlice';

export const store = configureStore({
    reducer: {
        games: gamesReducer,
        user: userReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(authApi.middleware),
});
