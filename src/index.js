import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import BeneficiaryCard from './components/BeneficiaryCard'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<>
    <BeneficiaryCard />
    <BeneficiaryCard />
    <BeneficiaryCard />
    <BeneficiaryCard />
</>)
