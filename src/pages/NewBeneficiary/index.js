import React, { useState } from 'react'
import styles from './styles.scss'
import BeneficiaryForm from '@/components/BeneficiaryForm'
import Modal from '@/components/Modal'
import { useNavigate } from 'react-router-dom'

export default function NewBeneficiary() {
    const [isModalVisible, setIsModalVisible] = useState()
    const navigate = useNavigate()
    const handleOpenModal = () => {
        setIsModalVisible(true)
    }
    const handleCloseModal = () => {
        setIsModalVisible(false)
    }
    const handleCancelBeneficiaryCreation = () => {
        navigate(-1)
    }
    return (
        <>
            <Modal
                isVisible={isModalVisible}
                confirmLabel='Voltar'
                title='Cancelar criação?'
                content='Nenhuma informação será salva'
                onCancel={handleCloseModal}
                onConfirm={handleCancelBeneficiaryCreation}
            />
            <div className={styles.container}>
                <h1>Novo Beneficiário</h1>
                <div className={styles.form}>
                    <BeneficiaryForm onCancel={handleOpenModal} />
                </div>
            </div>
        </>
    )
}
