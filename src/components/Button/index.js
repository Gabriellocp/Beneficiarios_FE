import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function Button({ children, onClick, type }) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            data-decoration={type}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['default', 'secondary', 'danger'])
}

Button.defaultProps = {
    type: 'default'
}
