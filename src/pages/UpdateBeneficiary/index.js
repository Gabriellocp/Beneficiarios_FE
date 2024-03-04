import BeneficiaryForm from '@/components/BeneficiaryForm'
import Tab from '@/components/Tab'
import React from 'react'
import styles from './styles.scss'
import NewMember from './components/NewMember'

export default function UpdateBeneficiary() {
    return (
        <div className={styles.container}>
            <h1>Nome do Beneficiário</h1>
            <Tab headers={['Informações', 'Integrantes']}>
                <BeneficiaryForm />
                <NewMember />
            </Tab>
        </div>
    )
}
