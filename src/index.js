import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import AddButton from './components/AddButton'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <AddButton label={'Novo beneficiário'} />
)
