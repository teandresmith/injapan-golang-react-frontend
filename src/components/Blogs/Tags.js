import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'
import { useGetAllTagsQuery } from '../../redux/services/tagAPI'
import Spinner from '../Spinner'

const Tags = ({ searchByTag }) => {
  const { data, isLoading } = useGetAllTagsQuery()

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.map((tag) => (
            <Tag key={tag.name} tagName={tag.name} searchByTag={searchByTag} />
          ))}
          <>
            <div className='tag-list-button-area'>
              <Link to='/blogs/view-all' className='tag-list-button' id='tags'>
                View All
              </Link>
            </div>
          </>
        </>
      )}
    </>
  )
}

export default Tags
