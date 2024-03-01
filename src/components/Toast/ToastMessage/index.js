import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function ToastMessage({ payload, onRemove }) {
    return (
        <div className={styles.container} data-type={payload.type} onClick={() => onRemove(payload)}>
            <span>
                {payload.message}
            </span>
        </div>
    )
}

ToastMessage.propTypes = {
    onRemove: PropTypes.func.isRequired,
    payload: PropTypes.shape({
        type: PropTypes.oneOf(['success', 'danger']),
        message: PropTypes.string.isRequired
    }).isRequired
}

ToastMessage.defaultProps = {
    payload: PropTypes.shape({
        type: 'success'
    })
}
