import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import Button from '../Button'
import Overlay from '../Overlay'
export default function Modal({
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel,
    title,
    content,
    type,
    isVisible
}) {
    if (!isVisible) return null
    return (
        <Overlay id="modal">
            <div className={styles.modal}>
                <h2 className={styles.title} data-decoration={type}>
                    {title}
                </h2>
                <h3 className={styles.content}>
                    {content}
                </h3>
                <div className={styles.actions}>
                    <Button decoration="secondary" onClick={onCancel} >{cancelLabel}</Button>
                    <Button decoration={type} onClick={onConfirm}>{confirmLabel}</Button>
                </div>
            </div>
        </Overlay>
    )
}

Modal.propTypes = {
    confirmLabel: PropTypes.string.isRequired,
    cancelLabel: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['default', 'danger']),
    onCancel: PropTypes.func,
    isVisible: PropTypes.bool
}

Modal.defaultProps = {
    cancelLabel: 'Cancelar',
    onCancel: null,
    type: 'default',
    isVisible: false
}
