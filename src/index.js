import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import MemberCard from './components/MemberCard'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <MemberCard />
)
