import React from 'react'
import '../assets/css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <>
      <footer className='footer-wrapper'>
        <div className='footer'>
          <div>
            <FontAwesomeIcon icon={'copyright'} /> 2022 InJapan
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
