import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../../assets/css/AdminDashboard.css'
import { useSelector } from 'react-redux'
import { useDeleteBlogMutation } from '../../../redux/services/blogAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminDashboard = ({ data }) => {
  const { admin } = useSelector((state) => state.admin)
  const navigate = useNavigate()

  const [deleteBlog] = useDeleteBlogMutation()

  const onDelete = async (e, blogID) => {
    e.preventDefault()

    if (!admin || !admin.user || !admin.user.token) {
      navigate('/admin/login')
      return
    }

    const requestHeaders = {
      'Content-Type': 'application/json',
      token: admin.user.token,
    }
    if (
      window.confirm(
        'You are about to delete this blog. Would you like to still continue with this action?'
      )
    ) {
      deleteBlog({ blogID, requestHeaders })
    }
  }

  return (
    <>
      <main className='all-blogs-container'>
        <div>
          <Link className='nav-button' to='/admin/dashboard/blogs/add'>
            {<FontAwesomeIcon icon={'plus'} />} Add New Blog{' '}
            {<FontAwesomeIcon icon={'plus'} />}
          </Link>
          <Link className='nav-button' to='/admin/dashboard/tags/edit'>
            {<FontAwesomeIcon icon={'plus'} />} Edit Tags{' '}
            {<FontAwesomeIcon icon={'plus'} />}
          </Link>
        </div>

        {data.map((blog) => (
          <div className='list-wrapper' key={blog.blog_id}>
            <section className='info'>
              <h2 className='title'>{blog.title}</h2>
              <h5 className='description'>{blog.blog_description}</h5>
              <small className='date'>{blog.created_at}</small>
              <div className='button-group'>
                <Link
                  className='edit-button'
                  to={`/admin/dashboard/blogs/${blog.blog_id}/edit`}
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => onDelete(e, blog.blog_id)}
                  className='delete-button'
                >
                  Delete
                </button>
              </div>
            </section>
          </div>
        ))}
      </main>
    </>
  )
}

export default AdminDashboard
