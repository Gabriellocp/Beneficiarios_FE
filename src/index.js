import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import Tab from './components/Tab'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <Tab headers={['Primeiro', 'Segundo']}>

    </Tab>
)
