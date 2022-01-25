import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeaturedBlog = ({ blogInfo }) => {
  return (
    <>
      <div className='blog-feature-element-wrapper'>
        <div className='blog-feature-element'>
          <div className='left-element'>
            <p className='featured'>
              <FontAwesomeIcon icon='indent' /> Featured
            </p>
            <h2 className='featured-title'>{blogInfo.title}</h2>
            <h4 className='featured-description'>
              {blogInfo.blog_description}
            </h4>
            <p className='featured-date'>{blogInfo.created_at}</p>
            <Link className='button-wrapper' to={`/blogs/${blogInfo.blog_id}`}>
              <div className='button'>Read More...</div>
            </Link>
          </div>
          <div className='right-element'>
            <img
              src={process.env.PUBLIC_URL + blogInfo.image}
              alt={blogInfo.image_description}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedBlog
