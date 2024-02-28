import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function Overlay({ id, children }) {
    let container = document.getElementById(id)
    if (!container) {
        container = document.createElement('div')
        container.setAttribute('id', id)
        document.body.appendChild(container)
    }
    return ReactDOM.createPortal(
        <div className={styles.overlay}>
            {children}
        </div>, container
    )
}

Overlay.propTypes = {
    children: PropTypes.node.isRequired
}
