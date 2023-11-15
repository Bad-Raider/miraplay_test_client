import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from './userSlice';

const BASE_URL = `http://localhost:3000/api`;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/register',
        method: 'POST',
        body: { name, email, password },
      }),
      invalidatesTags: ['auth'],
    }),
    signin: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
} = authApi;