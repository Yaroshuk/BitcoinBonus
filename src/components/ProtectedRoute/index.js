import React from "react"
import { Navigate } from "react-router-dom"
const ProtectedRoute = ({ isLogged, children, to = "/" }) => {
  if (!isLogged) {
    return <Navigate to={to} replace />
  }
  return children
}
export default ProtectedRoute
