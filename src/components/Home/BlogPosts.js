import React from 'react'
import BlogPost from './BlogPost'

const BlogPosts = ({ blogPosts }) => {
  return (
    <>
      {blogPosts.map((data) => (
        <BlogPost
          key={data.blog_id}
          imagePath={data.image}
          blogID={data.blog_id}
          imageDescription={data.image_description}
          blogDescription={data.blog_description}
        />
      ))}
    </>
  )
}

export default BlogPosts
