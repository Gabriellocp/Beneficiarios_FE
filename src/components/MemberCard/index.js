import React from 'react'
import trashcan from '@/assets/icons/trashcan.svg'
import styles from './styles.scss'

export default function MemberCard() {
    return (
        <div className={styles.container}>
            <div className={styles.memberInfo}>
                <div className={styles.relationship}>
                    Irmão
                </div>
                <span> Nome </span>
            </div>
            <img src={trashcan} alt='remover' />
        </div>
    )
}
