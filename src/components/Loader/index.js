import React from 'react'
import styles from './styles.scss'
import Overlay from '../Overlay'
export default function Loader() {
    return (
        <Overlay>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </Overlay>
    )
}
