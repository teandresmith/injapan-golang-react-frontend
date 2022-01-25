import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Screens/Home'
import BlogHomeScreen from './components/Screens/BlogHomeScreen'
import BlogView from './components/Screens/BlogView'
import AllBlogsView from './components/Screens/AllBlogsView'
import AdminLogin from './components/Admin/screens/AdminLogin'
import ScrollToTop from './components/ScrollToTop'
import RootGuard from './components/Auth/RootGuard'
import './assets/css/App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCopyright,
  faSearch,
  faTimes,
  faIndent,
  faArrowDown,
  faSpinner,
  faPlus,
  faCheck,
  faTrash,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons'
import { useGetSortedByNewestDateBlogsQuery } from './redux/services/blogAPI'
import Spinner from './components/Spinner'
import AdminDashboard from './components/Admin/screens/AdminDashboard'
import AdminAddBlog from './components/Admin/screens/AdminAddBlog'
import AdminEditBlog from './components/Admin/screens/AdminEditBlog'
import AdminEditTags from './components/Admin/screens/AdminEditTags'
import StickyArrow from './components/StickyArrow'

library.add(
  faBars,
  faCopyright,
  faSearch,
  faTimes,
  faIndent,
  faArrowDown,
  faSpinner,
  faPlus,
  faCheck,
  faTrash,
  faArrowUp
)

const App = () => {
  const { data, isLoading } = useGetSortedByNewestDateBlogsQuery(25)

  return (
    <>
      <BrowserRouter>
        <div className='entire-container'>
          <div className='blog-container'>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <ScrollToTop>
                  <Navbar />
                  <RootGuard>
                    <Routes>
                      <Route path='/' element={<Home data={data} />} />
                      <Route
                        path='/blogs'
                        element={<BlogHomeScreen data={data} />}
                      />
                      <Route path='/blogs/:blogid' element={<BlogView />} />
                      <Route
                        path='/blogs/view-all'
                        element={<AllBlogsView data={data} />}
                      />
                      <Route path='/admin/login' element={<AdminLogin />} />
                      <Route
                        path='/admin/dashboard'
                        element={<AdminDashboard data={data} />}
                      />
                      <Route
                        path='/admin/dashboard/blogs/add'
                        element={<AdminAddBlog />}
                      />
                      <Route
                        path='/admin/dashboard/blogs/:blogid/edit'
                        element={<AdminEditBlog />}
                      />
                      <Route
                        path='admin/dashboard/tags/edit'
                        element={<AdminEditTags />}
                      />
                    </Routes>
                  </RootGuard>
                  <Footer />
                  <StickyArrow />
                  <div className='overlay'></div>
                </ScrollToTop>
              </>
            )}
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
