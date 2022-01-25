import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const filteredBlogsSlice = createSlice({
  name: 'filteredBlog',
  initialState,
  reducers: {
    filterBlogsBySearch: (state, action) => {
      const searchQuery = action.payload.search
      const blogsToFilter = action.payload.data
      const filteredResults = blogsToFilter.filter((blog) =>
        blog.title.toUpperCase().includes(searchQuery.toUpperCase())
      )
      state.value = filteredResults
    },
    filterBlogsByTag: (state, action) => {
      const tagQuery = action.payload.tag
      const blogsToFilter = action.payload.data
      var filteredResults = []

      blogsToFilter.map((blog) =>
        blog.tags.map((tag) => {
          if (tag.name.toUpperCase() === tagQuery.toUpperCase()) {
            filteredResults.push(blog)
          }
          return 0
        })
      )
      state.value = filteredResults
    },
  },
})

// Action creators are generated for each case reducer function
export const { filterBlogsBySearch, filterBlogsByTag } =
  filteredBlogsSlice.actions

export default filteredBlogsSlice.reducer
