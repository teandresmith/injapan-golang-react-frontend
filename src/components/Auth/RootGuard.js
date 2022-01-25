import React from 'react'
import AuthGuard from './AuthGuard'

const RootGuard = ({ children }) => {
  return (
    <>
      <AuthGuard>{children}</AuthGuard>
    </>
  )
}

export default RootGuard
