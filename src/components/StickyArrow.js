import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/StickyArrow.css'

const StickyArrow = () => {
  const [show, setShow] = useState(false)

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  })

  const scrollToTop = () => {
    setShow(false)
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <div
        onClick={() => scrollToTop()}
        className={!show ? 'sticky-arrow hide' : 'sticky-arrow show'}
      >
        {<FontAwesomeIcon icon='arrow-up' />}
      </div>
    </>
  )
}

export default StickyArrow
