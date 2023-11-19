import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://miraplay-text-server.onrender.com/api/';

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: builder => ({
        login: builder.mutation({
            query: dataUsers => ({
                body: dataUsers,
                url: 'users/login',
                method: 'POST',
                
            }),
        }),
        register: builder.mutation({
            query: dataUsers => ({
                body: dataUsers,
                url: 'users/register',
                method: 'POST',
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
