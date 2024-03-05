import React from 'react'
import styles from './styles.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.right}>
                <Link to='/'> Home</Link>
            </div>
            <div className={styles.middle}>
                <Link> Page 1</Link>
                <Link> Page 2</Link>
            </div>
        </header>
    )
}
