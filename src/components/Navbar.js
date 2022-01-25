import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <>
      <nav className='nav-bar-wrapper'>
        <div className='nav-bar'>
          <Link className='logo' to='/'>
            <div>InJapan | 日本の中</div>
          </Link>
          <div
            className={
              open ? 'mobile-link-wrapper active' : 'mobile-link-wrapper'
            }
          >
            <FontAwesomeIcon
              icon='bars'
              className={open ? 'icon active' : 'icon'}
              onClick={onClick}
            />
          </div>
          <div className='nav-links'>
            <Link className='link' to='/blogs'>
              Blog
            </Link>

            <HashLink className='link' to='/#contact-anchor'>
              Contact
            </HashLink>
          </div>
        </div>
        <div className={open ? 'mobile-links active' : 'mobile-links'}>
          <Link className='m-link' to='/blogs'>
            Blog
          </Link>

          <HashLink className='m-link' to='/#contact-anchor'>
            Contact
          </HashLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar
