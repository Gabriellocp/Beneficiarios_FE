import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function Button({ children, onClick, decoration, type }) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            type={type}
            data-decoration={decoration}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    decoration: PropTypes.oneOf(['default', 'secondary', 'danger'])
}

Button.defaultProps = {
    decoration: 'default'
}
