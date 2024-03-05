import BeneficiaryCard from '@/components/BeneficiaryCard'
import React from 'react'
import styles from './styles.scss'
import AddButton from '@/components/AddButton'
import Input from '@/components/Input'
import { useNavigate } from 'react-router-dom'
import Pagination from '@/components/Pagination'

export default function BeneficiaryList() {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>BENEFICIÁRIOS</h1>
                <AddButton label='Adicionar' onClick={() => navigate('/create')} />
            </header>
            <Input placeholder='busque por nome, cpf ou rg' />
            <Pagination totalItems={10}>
                <div className={styles.list}>
                    {Array(4).fill(0).map((e) => <BeneficiaryCard key={Math.random()} />)}
                </div>
            </Pagination>
        </div>
    )
}
