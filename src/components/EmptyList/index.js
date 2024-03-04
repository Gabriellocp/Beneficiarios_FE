import React from 'react'
import PropTypes from 'prop-types'
import AddButton from '../AddButton'
import styles from './styles.scss'
export default function EmptyList({ list, description, actionLabel, onClick }) {
    if (list.length) return null

    return (
        <div className={styles.container}>
            <h1>{description}</h1>
            <AddButton label={actionLabel} onClick={onClick} />
        </div>
    )
}

EmptyList.propTypes = {
    list: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    actionLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

EmptyList.defaultProps = {
    actionLabel: 'Adicionar'
}
