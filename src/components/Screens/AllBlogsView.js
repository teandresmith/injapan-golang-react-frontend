import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/AllBlogsView.css'

const AllBlogsView = ({ data }) => {
  return (
    <>
      <main className='all-blogs-container'>
        <h2 className='section-title'>Blogs</h2>
        {data.map((blog) => (
          <Link
            key={blog.blog_id}
            className='list-wrapper'
            to={`/blogs/${blog.blog_id}`}
          >
            <section className='info'>
              <h2 className='title'>{blog.title}</h2>
              <h5 className='description'>{blog.blog_description}</h5>
              <small className='date'>{blog.created_at}</small>
            </section>
          </Link>
        ))}
      </main>
    </>
  )
}

export default AllBlogsView
