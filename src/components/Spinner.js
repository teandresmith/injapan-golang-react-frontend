import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import '../assets/css/Spinner.css'

const Spinner = () => {
  return (
    <div className='spinner-wrapper'>
      <FontAwesomeIcon className='spinner' spin icon='spinner' />
      <h3 className='spinner-text'>Loading...please wait</h3>
    </div>
  )
}

export default Spinner
