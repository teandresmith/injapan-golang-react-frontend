import { configureStore } from '@reduxjs/toolkit'
import { adminAPI } from './redux/services/adminAPI'
import { blogAPI } from './redux/services/blogAPI'
import { tagAPI } from './redux/services/tagAPI'
import filteredBlogReducer from './redux/states/filteredBlogs'
import adminReducer from './redux/states/adminState'

export const store = configureStore({
  reducer: {
    [blogAPI.reducerPath]: blogAPI.reducer,
    [tagAPI.reducerPath]: tagAPI.reducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
    filteredBlog: filteredBlogReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogAPI.middleware,
      tagAPI.middleware,
      adminAPI.middleware
    ),
})
