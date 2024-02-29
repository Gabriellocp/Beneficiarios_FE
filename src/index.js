import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import Header from './components/Header'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <Header />
)
