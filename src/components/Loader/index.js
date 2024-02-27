import React from 'react'
import styles from './styles.scss'
export default function Loader() {
    return (
        <div className={styles.overlay}>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
}
