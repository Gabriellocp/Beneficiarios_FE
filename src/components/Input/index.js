import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
export default function Input({ placeholder, onChange, error, type }) {
    const handleInputChange = (e) => {
        const { value } = e.target
        onChange(value)
    }
    return (
        <div>
            <input
                className={styles.input}
                placeholder={placeholder}
                onChange={handleInputChange}
                data-error={!!error}
                type={type}
            />
            {error && <span className={styles.errorHint}>{error}</span>}
        </div>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    type: PropTypes.string
}

Input.defaultProps = {
    error: '',
    type: 'text'
}
