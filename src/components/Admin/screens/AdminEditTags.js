import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  useCreateTagMutation,
  useDeleteTagMutation,
  useGetAllTagsQuery,
} from '../../../redux/services/tagAPI'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../assets/css/AdminEditTags.css'

const AdminEditTags = () => {
  const { data, isLoading } = useGetAllTagsQuery()
  const { admin } = useSelector((state) => state.admin)

  const [createTag] = useCreateTagMutation()
  const [deleteTag] = useDeleteTagMutation()

  const [newTagName, setNewTagName] = useState('')
  const [open, setOpen] = useState(false)

  const showNewTagInput = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  const createNewTag = () => {
    const tag = {
      name: newTagName,
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
      window.confirm('You are creating a new tag. Would you like to continue?')
    ) {
      createTag({ tag, requestHeaders })
    }
    setNewTagName('')
  }

  const deleteTheTag = (tagID) => {
    if (!admin || !admin.user || !admin.user.token) {
      navigate('/admin/login')
      return
    }

    const requestHeaders = {
      'Content-Type': 'application/json',
      token: admin.user.token,
    }
    if (window.confirm('You are deleting a tag. Would you like to continue?')) {
      deleteTag({ tagID, requestHeaders })
    }
  }

  const navigate = useNavigate()

  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon spin icon='spinner' />
      ) : (
        <>
          <div className='back-button-wrapper'>
            <Link className='back-button' to='/admin/dashboard'>
              Go Back
            </Link>
          </div>
          <div className='tag-edit-list-wrapper'>
            {data.map((tag) => (
              <div className='tag-edit-list-button-area' key={tag.name}>
                <div className='tag-edit-list-button' id='tags'>
                  {tag.name}
                </div>
                <div className='delete-button-wrapper'>
                  <FontAwesomeIcon
                    className='delete-button-custom'
                    icon='trash'
                    onClick={() => deleteTheTag(tag.tag_id)}
                  />
                </div>
              </div>
            ))}

            <div className='plus-wrapper'>
              <FontAwesomeIcon
                className={open ? 'close' : 'close hidden'}
                icon='times'
                onClick={() => showNewTagInput()}
              />
              <FontAwesomeIcon
                className={!open ? 'plus' : 'plus hidden'}
                icon='plus'
                onClick={() => showNewTagInput()}
              />
              <div
                className={
                  open ? 'plus-input-wrapper show' : 'plus-input-wrapper'
                }
              >
                <input
                  className='plus-input'
                  value={newTagName}
                  onChange={(e) => setNewTagName(e.target.value)}
                />
              </div>
              <FontAwesomeIcon
                className={open ? 'check' : 'check hidden'}
                icon='check'
                onClick={() => createNewTag()}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AdminEditTags
