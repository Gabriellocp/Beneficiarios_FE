import React from 'react'
import Header from '../Header'
import styles from './styles.scss'
import BeneficiaryList from '@/pages/BeneficiaryList'

export default function App() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <BeneficiaryList />
            </div>
        </>
    )
}
