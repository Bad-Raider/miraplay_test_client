import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3000/api/';


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
    registr: builder.mutation({
      query: dataUsers => ({
        body: dataUsers,
        url: 'users/registr',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrMutation } = authApi;
