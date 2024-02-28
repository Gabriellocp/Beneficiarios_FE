import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import Input from './components/Input'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<Input placeholder='Name' />)
