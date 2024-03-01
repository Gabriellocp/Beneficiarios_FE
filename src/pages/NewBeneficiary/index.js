import React from 'react'
import styles from './styles.scss'
import BeneficiaryForm from '@/components/BeneficiaryForm'

export default function NewBeneficiary() {
    return (
        <div className={styles.container}>
            <h1>Novo Beneficiário</h1>
            <div className={styles.form}>
                <BeneficiaryForm />
            </div>
        </div>
    )
}
