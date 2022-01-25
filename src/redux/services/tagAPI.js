import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = process.env.REACT_APP_DOMAIN

const createRequest = (url) => ({ url })

export const tagAPI = createApi({
  reducerPath: 'tagAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['Tags'],
  endpoints: (build) => ({
    getAllTags: build.query({
      query: () => createRequest('/tag'),
      providesTags: ['Tags'],
    }),
    createTag: build.mutation({
      query: ({ tag, requestHeaders }) => ({
        url: '/admin/tags/create',
        method: 'POST',
        headers: requestHeaders,
        body: tag,
      }),
      invalidatesTags: ['Tags'],
    }),
    deleteTag: build.mutation({
      query: ({ tagID, requestHeaders }) => ({
        url: `/admin/tags/delete/${tagID}`,
        method: 'DELETE',
        headers: requestHeaders,
      }),
      invalidatesTags: ['Tags'],
    }),
  }),
})

export const {
  useGetAllTagsQuery,
  useCreateTagMutation,
  useDeleteTagMutation,
} = tagAPI
