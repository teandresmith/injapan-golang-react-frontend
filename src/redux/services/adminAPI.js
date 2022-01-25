import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = process.env.REACT_APP_DOMAIN

export const adminAPI = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (user) => ({
        url: '/admin/login',
        method: 'POST',
        body: user,
      }),
    }),
  }),
})

export const { useLoginMutation } = adminAPI
