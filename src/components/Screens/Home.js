import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../../assets/css/Home.css'
import { useSendContactFormMutation } from '../../redux/services/blogAPI'
import BlogPosts from '../Home/BlogPosts'

const Home = ({ data }) => {
  const filteredData = data.slice(0, 3)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [open, setOpen] = useState(false)

  const [sendContactForm, { data: contactData, isLoading }] =
    useSendContactFormMutation()

  const handleSubmit = (e) => {
    e.preventDefault()

    const contactFormBody = {
      name,
      email,
      message,
    }

    if (window.confirm('Would you like to continue?')) {
      sendContactForm({ contactFormBody })
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  useEffect(() => {
    if (contactData) {
      setOpen(true)
      setTimeout(() => setOpen(false), 3000)
    }
  }, [contactData])

  return (
    <>
      <div className='hero'>
        <div className='hero-text'>
          <p>Hi - Welcome to InJapan</p>
          <h1>
            A blog that tells raw and uncut information about living in Japan
            from a foreigners perspective
          </h1>
        </div>
      </div>
      <main className='blog-content-wrapper'>
        {<BlogPosts blogPosts={filteredData} />}
      </main>
      <section className='contact'>
        <h1 id='contact-anchor'>Want to Contact Me?</h1>
        {isLoading && (
          <div style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon='spinner' spin />
            <h3>Sending contact form!</h3>
          </div>
        )}
        {contactData && open && <h3>{contactData.message}</h3>}
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-elements'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              name='name'
              id='name'
              placeholder='Enter Name. . .'
            />
          </div>
          <div className='form-elements'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
              id='email'
              placeholder='Enter Contact Email. . .'
            />
          </div>
          <div className='form-elements message-box'>
            <label htmlFor='message'>Message</label>
            <textarea
              className='input'
              name='message'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols='30'
              rows='10'
              placeholder='Enter Message. . .'
            ></textarea>
          </div>
          <div className='form-elements button'>
            <input type='submit' id='button' value='Submit' />
          </div>
        </form>
      </section>
    </>
  )
}

export default Home
