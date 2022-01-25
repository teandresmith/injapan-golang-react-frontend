import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({ blogID, imagePath, imageDescription, blogDescription }) => {
  return (
    <>
      <div className='blog-post'>
        <div className='blog-image-wrapper'>
          <img
            className='blog-image'
            src={imagePath}
            alt={imageDescription ? imageDescription : ''}
          />
        </div>
        <div className='blog-post-info'>
          <h4>{blogDescription}</h4>
          <Link to={`/blogs/${blogID}`}>
            <button className='blog-post-button'>Read More...</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogPost
