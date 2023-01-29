import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const LoginLayout = () => {
    const token = localStorage.getItem("token");
    return !token ? <Outlet /> : <Navigate to="/dashboard" />
}

export default LoginLayout
