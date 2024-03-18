import React from 'react'

const Blog = ({blogs}) => {
  const { title, author, content } = blogs.fields;
  
  return (
    <div>Blog</div>
  )
}

export default Blog