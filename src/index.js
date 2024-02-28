import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import Button from './components/Button'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<Button label='Cadastrar' onClick={() => console.log('h')} >
    <h3>Button</h3>
</Button>)
