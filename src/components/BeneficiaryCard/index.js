import React, { useState } from 'react'
import styles from './styles.scss'
import eye from '@/assets/icons/eye.svg'
import pencil from '@/assets/icons/pencil.svg'
import trashcan from '@/assets/icons/trashcan.svg'
import Modal from '../Modal'
import { useNavigate } from 'react-router-dom'

export default function BeneficiaryCard() {
    // TODO : Create components for the minor pieces of this component
    // TODO : Add props
    const [isModalVisible, setIsModalVisible] = useState(false)
    const navigate = useNavigate()
    const handleRemoveBeneficiary = () => {
        setIsModalVisible(true)
    }
    const handleCloseModal = () => {
        setIsModalVisible(false)
    }
    const handleUpdateBeneficiary = () => {
        navigate('/update/1')
    }
    return (
        <>
            <Modal
                isVisible={isModalVisible}
                type='danger'
                confirmLabel='Deletar'
                title='Deletar beneficiário?'
                onCancel={handleCloseModal}
                content='Esta ação não poderá ser desfeita'
            />

            <div className={styles.container}>
                <div className={styles.beneficiary}>
                    <div className={styles.info}>
                        <span>Gabriel Orlando Campista Petrucci</span>
                        <span>111.179.716-19</span>
                    </div>
                    <div className={styles.status}>
                        Aguardando requisição
                    </div>
                </div>
                <div className={styles.footer}>
                    <div>
                        <span>Cestas: 10</span>
                        <span>Integrantes: 3</span>
                    </div>
                    <div className={styles.actions}>
                        <img src={eye} alt='detalhes' role='button' ></img>
                        <img src={pencil} alt='editar' role='button' onClick={handleUpdateBeneficiary} ></img>
                        <img src={trashcan} alt='remover' role='button' onClick={handleRemoveBeneficiary}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
