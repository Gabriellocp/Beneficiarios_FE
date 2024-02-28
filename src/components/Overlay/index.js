import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function Overlay({ children }) {
    return (
        <div className={styles.overlay}>
            {children}
        </div>
    )
}

Overlay.propTypes = {
    children: PropTypes.node.isRequired
}
