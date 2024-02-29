import BeneficiaryCard from '@/components/BeneficiaryCard'
import React from 'react'
import styles from './styles.scss'
import AddButton from '@/components/AddButton'
import Input from '@/components/Input'

export default function BeneficiaryList() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>BENEFICIÁRIOS</h1>
                <AddButton label='Adicionar' />
            </header>
            <Input placeholder='busque por nome, cpf ou rg' />
            <div className={styles.list}>
                {Array(10).fill(0).map((e) => <BeneficiaryCard key={Math.random()} />)}
            </div>
        </div>
    )
}
