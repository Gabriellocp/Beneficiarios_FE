import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import Modal from './components/Modal'
import Loader from './components/Loader'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<>
    <Modal title="Deletar usuário 'user'?"
        cancelLabel='Cancel'
        confirmLabel='Confirmar'
        content={<h2>Essa ação só poderá ser realizada uma vez.</h2>}
    />
    <Loader />
</>)
