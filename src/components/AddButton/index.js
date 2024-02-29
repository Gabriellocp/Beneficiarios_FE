import React from 'react'
import add from '@/assets/icons/add.svg'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import Button from '../Button'
export default function AddButton({ label, onClick }) {
    return (
        <Button onClick={onClick} decoration='secondary'>
            <img width={20} src={add} alt="adicionar" />
            <span className={styles.label}>{label}</span>
        </Button>

    )
}

AddButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
