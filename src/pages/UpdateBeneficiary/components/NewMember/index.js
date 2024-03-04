import MemberCard from '@/components/MemberCard'
import React from 'react'
import styles from './styles.scss'
import AddButton from '@/components/AddButton'
const memberArray = Array(0).fill(Math.random())
export default function NewMember() {
    return (
        <div className={styles.container}>
            <AddButton label='Adicionar Integrante' />
            {memberArray.map((member) =>
                <div key={member} className={styles.item}>
                    <MemberCard />
                </div>
            )}
        </div>
    )
}
