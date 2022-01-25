import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  useGetAllTagsQuery,
  useCreateTagMutation,
} from '../../redux/services/tagAPI'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminFormTags = ({ blog, setTags }) => {
  const { data, isLoading } = useGetAllTagsQuery()
  const { admin } = useSelector((state) => state.admin)

  const [createTag] = useCreateTagMutation()

  const navigate = useNavigate()

  const [selectedTags, setSelectedTags] = useState([])
  const [newTagName, setNewTagName] = useState('')
  const [open, setOpen] = useState(false)

  const setStateTags = () => {
    var tags = []
    data.map((tag) =>
      tags.push({
        _id: tag._id,
        name: tag.name,
        tag_id: tag.tag_id,
        selected: false,
      })
    )

    if (blog.length !== 0) {
      tags.map((tag) => {
        blog.tags.map((selectedTag) => {
          if (selectedTag.name === tag.name) {
            tag.selected = true
          }
          return null
        })
        return null
      })
    }

    setSelectedTags(tags)
    tags = tags.filter((tag) => tag.selected === true)
    setTags(tags)
  }

  const onClick = (clickedTag) => {
    var tags = [...selectedTags]
    const tagIndex = tags.findIndex((object) => {
      return object.name === clickedTag
    })

    if (tags[tagIndex].selected === true) {
      tags[tagIndex].selected = false
    } else {
      tags[tagIndex].selected = true
    }

    setSelectedTags(tags)
    tags = tags.filter((tag) => tag.selected === true)
    setTags(tags)
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

  const showNewTagInput = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    if (data) {
      setStateTags()
    }
  }, [data])

  return (
    <>
      {isLoading ? (
        <FontAwesomeIcon spin icon='spinner' />
      ) : (
        <>
          <div className='admin-tag-list-wrapper'>
            {selectedTags.map((tag) => (
              <div
                className={
                  tag.selected
                    ? 'admin-tag-list-button-area active'
                    : 'admin-tag-list-button-area'
                }
                key={tag.name}
                onClick={() => onClick(tag.name)}
              >
                <div
                  className={
                    tag.selected
                      ? 'admin-tag-list-button active'
                      : 'admin-tag-list-button'
                  }
                  id='tags'
                >
                  {tag.name}
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

export default AdminFormTags
