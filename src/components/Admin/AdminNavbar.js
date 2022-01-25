import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/Navbar.css'

const AdminNavbar = () => {
  return (
    <>
      <div className='nav-bar'>
        <Link className='logo' to='/'>
          <div>InJapan | 日本の中</div>
        </Link>
        <div className='nav-links'>
          <Link className='link' to='/blogs'>
            View Blogs
          </Link>

          <Link className='link' to='/#contact-anchor'>
            Add Blogs
          </Link>
        </div>
      </div>
    </>
  )
}

export default AdminNavbar
