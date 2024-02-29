import React from 'react'
import styles from './styles.scss'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.right}>
                <a> Home</a>
            </div>
            <div className={styles.middle}>
                <a> Page 1</a>
                <a> Page 2</a>
            </div>
        </header>
    )
}
