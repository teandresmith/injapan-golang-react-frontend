import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  useGetBlogByIDQuery,
  useUpdateBlogMutation,
} from '../../../redux/services/blogAPI'
import Spinner from '../../Spinner'
import '../../../assets/css/AdminForms.css'
import AdminFormTags from '../AdminFormTags'
import { useSelector } from 'react-redux'

const AdminEditBlog = () => {
  const params = useParams('blogid')
  const { data, isLoading } = useGetBlogByIDQuery(params.blogid)

  const { admin } = useSelector((state) => state.admin)

  const [updateBlog] = useUpdateBlogMutation()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [image, setImage] = useState('')
  const [imageDescription, setImageDescription] = useState('')
  const [blogDescription, setBlogDescription] = useState('')
  const [tags, setTags] = useState([])
  const [body, setBody] = useState('')

  const handleSubmit = (e, blogID) => {
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
      updateBlog({ blogID, requestHeaders, blogData })
      navigate('/admin/dashboard')
    }
  }

  useEffect(() => {
    if (data) {
      setTitle(data.title)
      setSubtitle(data.subtitle)
      setImage(data.image)
      setImageDescription(data.image_description)
      setBlogDescription(data.blog_description)
      setBody(data.body)
    }
  }, [data])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='back-button-wrapper'>
            <Link className='back-button' to='/admin/dashboard'>
              Go Back
            </Link>
          </div>
          <h2 className='form-header'>Edit Blog</h2>
          <div className='form-container'>
            <form
              onSubmit={(e) => handleSubmit(e, data.blog_id)}
              className='form'
            >
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
                <AdminFormTags blog={data} setTags={setTags} />
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

              <input
                className='admin-submit-button'
                type='submit'
                value='Submit'
              />
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default AdminEditBlog
