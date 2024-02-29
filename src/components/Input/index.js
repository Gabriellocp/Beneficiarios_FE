import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function Input({ placeholder, onChange, error }) {
    const handleInputChange = (e) => {
        const { value } = e.target
        onChange(value)
    }
    return (
        <>
            <input
                className={styles.input}
                placeholder={placeholder}
                onChange={handleInputChange}
                data-error={!!error}
            />
            {error && <span className={styles.errorHint}>{error}</span>}
        </>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

Input.defaultProps = {
    error: ''
}
