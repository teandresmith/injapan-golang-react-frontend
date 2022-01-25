import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AdminFormTags from '../AdminFormTags'
import '../../../assets/css/AdminForms.css'
import { useAddBlogMutation } from '../../../redux/services/blogAPI'

const AdminAddBlog = () => {
  const { admin } = useSelector((state) => state.admin)
  const blogs = []

  const navigate = useNavigate()
  const [addBlog] = useAddBlogMutation()

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [image, setImage] = useState('')
  const [imageDescription, setImageDescription] = useState('')
  const [blogDescription, setBlogDescription] = useState('')
  const [tags, setTags] = useState([])
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    var formattedTags = []
    tags.map((tag) =>
      formattedTags.push({ _id: tag._id, name: tag.name, tag_id: tag.tag_id })
    )

    const slug = title.replaceAll(' ', '-').toLowerCase()

    const blogData = {
      title: title,
      subtitle: subtitle,
      image: image,
      image_description: imageDescription,
      blog_description: blogDescription,
      slug: slug,
      tags: formattedTags,
      body: body,
    }

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
        'You are submitting changes to this blog. Would you like to continue?'
      )
    ) {
      addBlog({ blogData, requestHeaders })
      navigate('/admin/dashboard')
    }
  }
  return (
    <>
      <div className='back-button-wrapper'>
        <Link className='back-button' to='/admin/dashboard'>
          Go Back
        </Link>
      </div>
      <h2 className='form-header'>Add blog</h2>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='input-wrapper'>
            <label className='text-label' htmlFor='title'>
              Title
            </label>
            <input
              required
              type='text'
              name='title'
              className='data-input'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className='input-wrapper'>
            <label className='text-label' htmlFor='subtitle'>
              Subtitle
            </label>
            <input
              required
              type='text'
              name='subtitle'
              className='data-input'
              onChange={(e) => setSubtitle(e.target.value)}
              value={subtitle}
            />
          </div>
          <div className='input-wrapper'>
            <label className='text-label' htmlFor='image'>
              Image
            </label>
            <input
              required
              type='text'
              name='image'
              className='data-input'
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>
          <div className='input-wrapper'>
            <label className='text-label' htmlFor='imageDescription'>
              Image Description
            </label>
            <input
              required
              type='text'
              name='imageDescription'
              className='data-input'
              value={imageDescription}
              onChange={(e) => setImageDescription(e.target.value)}
            />
          </div>
          <div className='input-wrapper'>
            <label className='text-label' htmlFor='description'>
              Blog Description
            </label>
            <textarea
              required
              type='text'
              name='description'
              className='text-area'
              rows={5}
              column={30}
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
            />
          </div>
          <div className='input-wrapper'>
            <label className='text-label' htmlFor='tags'>
              Tags
            </label>
            <AdminFormTags blog={blogs} setTags={setTags} />
          </div>
          <div className='input-wrapper'>
            <label className='text-label' htmlFor='body'>
              Body
            </label>
            <textarea
              required
              className='text-area'
              name='body'
              id='body'
              cols='30'
              rows='10'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <input className='admin-submit-button' type='submit' value='Submit' />
        </form>
      </div>
    </>
  )
}

export default AdminAddBlog
