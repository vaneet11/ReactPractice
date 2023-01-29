import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import TopNavbar from './Navbar'

export default function ProductLayout() {
    const token = localStorage.getItem('token')
    return token ? <><TopNavbar /><Outlet /> </> : <Navigate to='/login' />
}
