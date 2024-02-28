import React from 'react'
import styles from './styles.scss'
import eye from '@/assets/icons/eye.svg'
import pencil from '@/assets/icons/pencil.svg'
import trashcan from '@/assets/icons/trashcan.svg'

export default function BeneficiaryCard() {
    // TODO : Create components for the minor pieces of this component
    // TODO : Add props
    return (
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
                    <img src={eye} alt='detalhes'></img>
                    <img src={pencil} alt='editar'></img>
                    <img src={trashcan} alt='remover'></img>
                </div>
            </div>
        </div>
    )
}
