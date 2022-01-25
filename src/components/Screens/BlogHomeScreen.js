import React, { useState } from 'react'
import BlogCards from '../Blogs/BlogCards'
import FeaturedBlog from '../Blogs/FeaturedBlog'
import '../../assets/css/BlogsHomeScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tags from '../Blogs/Tags'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterBlogsByTag,
  filterBlogsBySearch,
} from '../../redux/states/filteredBlogs'

const BlogHomeScreen = ({ data }) => {
  const [open, setOpen] = useState(false)
  const [filterBy, setFilterBy] = useState('None')
  const [search, setSearch] = useState('')
  const [openWithTimer, setOpenWithTimer] = useState(false)

  const dispatch = useDispatch()
  const filteredBlog = useSelector((state) => state.filteredBlog.value)

  const onOpen = () => {
    setOpen(true)
    setTimeout(() => setOpenWithTimer(true), 350)
  }

  const onClose = () => {
    setOpen(false)
    setOpenWithTimer(false)
    setSearch('')
    setFilterBy('None')
  }

  const searchByTag = (tag) => {
    setFilterBy('Tag')
    setSearch('')
    dispatch(filterBlogsByTag({ tag, data }))
  }

  const searchByText = (searchQuery) => {
    if (searchQuery !== '') {
      setFilterBy('Search')
      setSearch(searchQuery)
      dispatch(filterBlogsBySearch({ search: searchQuery, data }))
    } else {
      setSearch('')
      setFilterBy('None')
    }
  }

  const checkFilterBy = () => {
    switch (filterBy) {
      case 'Search':
        return filteredBlog
      case 'Tag':
        return filteredBlog
      case 'None':
        return data
      default:
        return data
    }
  }

  return (
    <>
      <div className='blog-header-text'>
        <p>こんにちは - Welcome to InJapan</p>
        <h1>Blogs</h1>
      </div>
      <section className='blog-feature-wrapper'>
        <FeaturedBlog blogInfo={data[0]} />
      </section>
      <main className='blog-list-wrapper'>
        <div className='blog-list-background'>
          <div className='blog-list'>
            <div className='blog-card-container'>
              {<BlogCards data={checkFilterBy()} />}
            </div>
          </div>
          <div className={open ? 'blog-sidebar show' : 'blog-sidebar'}>
            <FontAwesomeIcon
              className={open ? 'search-icon show' : 'search-icon hide'}
              onClick={onOpen}
              icon='search'
            />
            <div>
              <FontAwesomeIcon
                className={open ? 'minimize-icon show' : 'minimize-icon'}
                onClick={onClose}
                icon='times'
              />
            </div>
            <div className={open ? 'search-bar show' : 'search-bar'}>
              <input
                type='search'
                name='search'
                id='search'
                value={search}
                placeholder='Search by title name here...'
                onChange={(e) => searchByText(e.target.value)}
              />
            </div>
            <div
              className={open ? 'tag-list-wrapper show' : 'tag-list-wrapper'}
            >
              <div className={!openWithTimer ? 'tag-list' : 'tag-list show'}>
                <Tags searchByTag={searchByTag} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default BlogHomeScreen
