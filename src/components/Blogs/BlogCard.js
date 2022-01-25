import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blogID, imagePath, imageDescription, titleName }) => {
  return (
    <>
      <Link className='blog-card' to={`/blogs/${blogID}`}>
        <div className=''>
          <div className='blog-card-image'>
            <img src={imagePath} alt={imageDescription} />
          </div>
          <div className='blog-card-text'>
            <h5>{titleName}</h5>
          </div>
        </div>
      </Link>
    </>
  )
}

export default BlogCard
