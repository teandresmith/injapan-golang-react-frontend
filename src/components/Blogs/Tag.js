import React from 'react'

const Tag = ({ tagName, searchByTag }) => {
  return (
    <>
      <div
        onClick={() => searchByTag(tagName)}
        className='tag-list-button-area'
      >
        <div className='tag-list-button' id='tags'>
          {tagName}
        </div>
      </div>
    </>
  )
}

export default Tag
