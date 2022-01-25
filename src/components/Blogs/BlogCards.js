import React from 'react'
import BlogCard from './BlogCard'

const BlogCards = ({ data }) => {
  const filteredData = data.slice(0, 6)

  return (
    <>
      {filteredData.map((blogData) => (
        <BlogCard
          key={blogData.blog_id}
          blogID={blogData.blog_id}
          imagePath={blogData.image}
          imageDescription={blogData.image_description}
          titleName={blogData.title}
        />
      ))}
    </>
  )
}

export default BlogCards
