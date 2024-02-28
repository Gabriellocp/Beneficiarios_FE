import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import InputValidationBuilder from '@/validation/InputValidation/InputValidationBuilder'
export default function Input({ placeholder, onChange }) {
    const validator2 = InputValidationBuilder.create('name').required().email()
    console.log(validator2)
    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            onChange={onChange}
        >

        </input>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
