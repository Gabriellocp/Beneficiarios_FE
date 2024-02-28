import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import Button from '../Button'
import Overlay from '../Overlay'
export default function Modal({ confirmLabel, cancelLabel, onConfirm, onCancel, title, content, type }) {
    return (
        <Overlay>
            <div className={styles.modal}>
                <h1 className={styles.title} data-decoration={type}>
                    {title}
                </h1>
                <div className={styles.content}>
                    {content}
                </div>
                <div className={styles.actions}>
                    <Button type="secondary" onClick={onCancel} >{cancelLabel}</Button>
                    <Button type={type} onClick={onConfirm}>{confirmLabel}</Button>
                </div>
            </div>
        </Overlay>
    )
}

Modal.propTypes = {
    confirmLabel: PropTypes.string.isRequired,
    cancelLabel: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['default', 'danger'])
}

Modal.defaultProps = {
    cancelLabel: 'Cancelar',
    onCancel: null,
    type: 'default'
}
