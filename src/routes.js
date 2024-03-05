import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Create, Home, Update } from './pages'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/update/:id' Component={Update} />
            <Route path='/create' Component={Create} />
        </Routes>
    )
}
