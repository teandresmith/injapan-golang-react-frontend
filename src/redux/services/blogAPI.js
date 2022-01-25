import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = process.env.REACT_APP_DOMAIN

const createRequest = (url) => ({ url })

export const blogAPI = createApi({
  reducerPath: 'blogAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['Blogs'],
  endpoints: (build) => ({
    getAllBlogs: build.query({
      query: () => createRequest('/blogs'),
      providesTags: ['Blogs'],
    }),
    getBlogByID: build.query({
      query: (blogID) => createRequest(`/blogs/${blogID}`),
      providesTags: ['Blogs'],
    }),
    getSortedByNewestDateBlogs: build.query({
      query: (numberOfBlogs) =>
        createRequest(
          `/blogs/query?sortedBy=created_at&sortedFlow=desc&numberOfBlogs=${numberOfBlogs}`
        ),
      providesTags: ['Blogs'],
    }),
    deleteBlog: build.mutation({
      query: ({ blogID, requestHeaders }) => ({
        url: `/admin/blogs/delete/${blogID}`,
        headers: requestHeaders,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blogs'],
    }),
    updateBlog: build.mutation({
      query: ({ blogID, requestHeaders, blogData }) => ({
        url: `/admin/blogs/update/${blogID}`,
        headers: requestHeaders,
        body: blogData,
        method: 'PATCH',
      }),
      invalidatesTags: ['Blogs'],
    }),
    addBlog: build.mutation({
      query: ({ blogData, requestHeaders }) => ({
        url: '/admin/blogs/create',
        headers: requestHeaders,
        body: blogData,
        method: 'POST',
      }),
      invalidatesTags: ['Blogs'],
    }),
    sendContactForm: build.mutation({
      query: ({ contactFormBody }) => ({
        url: '/blogs/email',
        body: contactFormBody,
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useGetAllBlogsQuery,
  useGetBlogByIDQuery,
  useGetSortedByNewestDateBlogsQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useAddBlogMutation,
  useSendContactFormMutation,
} = blogAPI
