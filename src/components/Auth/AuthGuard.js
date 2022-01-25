import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthGuard = ({ children }) => {
  const { admin } = useSelector((state) => state.admin)
  const navigate = useNavigate()
  const location = useLocation()

  const ADMIN_PERMISSIONS = {
    loggedIn: false,
  }

  if (admin && admin.user && admin.user.token) {
    ADMIN_PERMISSIONS.loggedIn = true
  }

  useEffect(() => {
    if (
      location.pathname.includes('/admin/dashboard') &&
      !ADMIN_PERMISSIONS.loggedIn
    ) {
      navigate('/admin/login')
    }
  }, [location.pathname, ADMIN_PERMISSIONS.loggedIn, navigate])
  return children
}

export default AuthGuard
