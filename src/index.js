import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import App from './components/App'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <App />
)
