import React, { useEffect, useState } from 'react'
import '../../../assets/css/AdminLogin.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../redux/states/adminState'
import Spinner from '../../Spinner'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { admin, status, isLoading } = useSelector((state) => state.admin)

  const handleSubmit = (e) => {
    e.preventDefault()
    const admin1 = {
      email: email,
      password: password,
    }
    dispatch(login(admin1))
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (admin && admin.message === 'Login Successful') {
      navigate('/admin/dashboard')
    }
  }, [admin, navigate, admin.message])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {status === 'Failed Login' && <h3>{status}</h3>}
          <div className='login-wrapper'>
            <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                id='email'
              />
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                id='password'
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default AdminLogin
