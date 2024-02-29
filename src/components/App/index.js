import React from 'react'
import Header from '../Header'
import styles from './styles.scss'
import BeneficiaryForm from '../BeneficiaryForm'

export default function App() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <BeneficiaryForm />
            </div>
        </>
    )
}
