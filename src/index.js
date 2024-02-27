import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import Loader from './components/Loader'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<Loader />)
